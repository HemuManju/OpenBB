"""ETF Router Definitions"""

from typing import Dict, List, Optional

import pandas as pd
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.utils import basemodel_to_df
from pydantic import Field


class Results:
    """Class to dynamically parse results and get the fields."""

    def __init__(self, data, model):
        items = list(data.__dict__.keys())
        setattr(self, "model", model)
        for item in items:
            setattr(self, item, data.__dict__[item])
        if len(data.results) == 0:
            setattr(self, "fields", [])
        if model == "EtfHoldings" and len(data.results) == 2:
            setattr(self, "info", data.results[1])
            setattr(self, "results", data.results[0])
        if len(self.results) > 0:
            setattr(
                self,
                "fields",
                sorted(basemodel_to_df(self.results).columns.tolist()),
            )


class EtfSearch(OBBject):
    """
    ETFSearchData
    ---------------

        Attributes
        ----------
        model: str
            The OpenBB data model.
        provider: str
            The data source.
        fields: List
            Fields returned from the provider.
        results: List
            Serialized results.
        metadata: Dict
            Parameter and command execution metadata.
        warnings: List
            Warnings generated by the command execution.
        id: str
            Unique hash string for the request.

        Methods
        -------
        to_dataframe(): pd.DataFrame
            Convert the results to a Pandas DataFrame.
        to_dict(): Dict
            Convert the results to a dictionary.
    """

    model: str = Field(description="The OpenBB data model.")
    provider: Optional[str] = Field(description="The data source.")
    fields: Optional[List[str]] = Field(
        description="Fields returned from the provider."
    )
    results: List[Dict] = Field(description="Serialized results.")
    metadata: Optional[Dict] = Field(
        description="Parameter and command execution metadata."
    )
    warnings: Optional[List] = Field(
        description="Warnings generated by the command execution."
    )
    id: str = Field(description="Unique hash string for the request.")

    def __repr__(self):
        query = self.metadata["arguments"]["standard_params"]["query"]
        repr_str = (
            f"EtfSearch(provider={self.provider.lower()}, query={query}, "
            f"fields={self.fields})"
        )
        return repr_str

    def to_dataframe(self) -> pd.DataFrame:
        if len(self.results) == 0:
            return pd.DataFrame()
        data = pd.DataFrame.from_records(self.dict()["results"])
        return data


class EtfHoldings(OBBject):
    """
    ETFHoldingsData
    ---------------

        Attributes
        ----------
        model: str
            The OpenBB data model.
        provider: str
            The data source.
        fields: List
            Fields returned from the provider.
        info: Dict
            Additional information about the daily holdings.  Valid only for providers: ['blackrock', 'fmp']
        results: List
            Serialized results.
        metadata: Dict
            Parameter and command execution metadata.
        warnings: List
            Warnings generated by the command execution.
        id: str
            Unique hash string for the request.

        Methods
        -------
        to_dataframe(): pd.DataFrame
            Convert the results to a Pandas DataFrame.
        to_dict(): Dict
            Convert the results to a dictionary.
    """

    model: str = Field(description="The OpenBB data model.")
    provider: Optional[str] = Field(description="The data source.")
    fields: List[str] = Field(description="Fields returned from the provider.")
    info: Optional[Dict] = Field(
        description="Additional information about the daily holdings.  Valid only for providers: ['blackrock', 'fmp']"
    )
    results: List[Dict] = Field(description="Serialized results.")
    metadata: Optional[Dict] = Field(
        description="Parameter and command execution metadata."
    )
    warnings: Optional[List] = Field(
        description="Warnings generated by the command execution."
    )
    id: str = Field(description="Unique hash string for the request.")

    def __repr__(self):
        symbol = self.metadata["arguments"]["standard_params"]["symbol"]
        repr_str = (
            f"EtfHoldings(provider={self.provider.lower()}, symbol={symbol.lower()}, "
            f"fields={self.fields})"
        )
        return repr_str

    def to_dataframe(self) -> pd.DataFrame:
        if len(self.results) == 0:
            return pd.DataFrame()
        data = pd.DataFrame.from_records(self.dict()["results"]).convert_dtypes()
        for column in data.columns:
            if data[column].unique().tolist()[0] is None:
                data.drop(columns=column, inplace=True)
        return data
