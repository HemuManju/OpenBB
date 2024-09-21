"""Tiingo World News Model."""

# pylint: disable=unused-argument

import math
from datetime import datetime
from typing import Any, Dict, List, Optional

from dateutil import parser
from openbb_core.provider.abstract.fetcher import Fetcher
from openbb_core.provider.standard_models.world_news import (
    WorldNewsData,
    WorldNewsQueryParams,
)
from openbb_core.provider.utils.helpers import amake_requests, get_querystring
from pydantic import Field, field_validator


class TiingoWorldNewsQueryParams(WorldNewsQueryParams):
    """Tiingo World News Query.

    Source: https://www.tiingo.com/documentation/news
    """

    __alias_dict__ = {
        "start_date": "startDate",
        "end_date": "endDate",
    }
    offset: Optional[int] = Field(
        default=0, description="Page offset, used in conjunction with limit."
    )
    source: Optional[str] = Field(
        default=None, description="A comma-separated list of the domains requested."
    )


class TiingoWorldNewsData(WorldNewsData):
    """Tiingo World News Data."""

    __alias_dict__ = {
        "date": "publishedDate",
        "text": "description",
        "symbols": "tickers",
        "article_id": "id",
        "site": "source",
    }

    symbols: Optional[str] = Field(
        default=None,
        description="Ticker tagged in the fetched news.",
    )
    article_id: int = Field(description="Unique ID of the news article.")
    site: str = Field(description="News source.")
    tags: Optional[str] = Field(
        default=None,
        description="Tags associated with the news article.",
    )
    crawl_date: datetime = Field(description="Date the news article was crawled.")

    @field_validator("tags", "symbols", mode="before")
    @classmethod
    def list_to_string(cls, v):
        """Convert list to string."""
        return ",".join(v) if v else None

    @field_validator("crawl_date", mode="before")
    @classmethod
    def validate_date(cls, v):
        """Validate the date."""
        return parser.parse(v)


class TiingoWorldNewsFetcher(
    Fetcher[
        TiingoWorldNewsQueryParams,
        List[TiingoWorldNewsData],
    ]
):
    """Transform the query, extract and transform the data from the Tiingo endpoints."""

    @staticmethod
    def transform_query(params: Dict[str, Any]) -> TiingoWorldNewsQueryParams:
        """Transform the query params."""
        return TiingoWorldNewsQueryParams(**params)

    @staticmethod
    async def aextract_data(
        query: TiingoWorldNewsQueryParams,
        credentials: Optional[Dict[str, str]],
        **kwargs: Any,
    ) -> List[Dict]:
        """Return the raw data from the tiingo endpoint."""
        api_key = credentials.get("tiingo_token") if credentials else ""

        base_url = "https://api.tiingo.com/tiingo/news"

        query_str = get_querystring(
            query.model_dump(by_alias=False), ["limit", "offset"]
        )

        limit = query.limit if query.limit else 1000
        pages = 0
        if limit > 1000:
            pages = math.ceil(limit / 1000)
            limit = 1000
            urls = [
                f"{base_url}?{query_str}&token={api_key}&limit={limit}&offset={page * 1000 if page > 0 else 0}"
                for page in range(0, pages)
            ]
        else:
            urls = [f"{base_url}?{query_str}&token={api_key}&limit={limit}"]

        return await amake_requests(urls)

    @staticmethod
    def transform_data(
        query: TiingoWorldNewsQueryParams, data: List[Dict], **kwargs: Any
    ) -> List[TiingoWorldNewsData]:
        """Return the transformed data."""
        return [TiingoWorldNewsData.model_validate(d) for d in data[: query.limit]]
