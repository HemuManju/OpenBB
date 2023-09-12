"""TMX Helpers Module."""

from datetime import timedelta

import pandas as pd
import requests_cache

# Only used for obtaining all ETFs.
tmx_etfs_session = requests_cache.CachedSession(
    "OpenBB_TMX_ETFs", expire_after=timedelta(hours=4), use_cache_dir=True
)

COLUMNS_DICT = {
    "symbol": "symbol",
    "shortname": "short_name",
    "longname": "name",
    "fundfamily": "fund_family",
    "regions": "regions",
    "sectors": "sectors",
    "currency": "currency",
    "inceptiondate": "inception_date",
    "unitprice": "unit_price",
    "prevClose": "prev_close",
    "close": "close",
    "esg": "esg",
    "investmentstyle": "investment_style",
    "avgdailyvolume": "volume_avg_daily",
    "totalreturn1month": "return_1m",
    "totalreturn3month": "return_3m",
    "totalreturn1year": "return_1y",
    "totalreturn3year": "return_3y",
    "totalreturn5year": "return_5y",
    "totalreturnytd": "return_ytd",
    "totalreturnsinceinception": "return_from_inception",
    "distributionyeld": "distribution_yield",
    "dividendfrequency": "dividend_frequency",
    "pricetoearnings": "pe_ratio",
    "pricetobook": "pb_ratio",
    "assetclass": "asset_class_id",
    "prospectobjective": "investment_objectives",
    "beta1y": "beta_1y",
    "beta2y": "beta_2y",
    "beta3y": "beta_3y",
    "beta4y": "beta_4y",
    "beta5y": "beta_5y",
    "beta6y": "beta_6y",
    "beta7y": "beta_7y",
    "beta8y": "beta_8y",
    "beta9y": "beta_9y",
    "beta10y": "beta_10y",
    "beta11y": "beta_11y",
    "beta12y": "beta_12y",
    "beta13y": "beta_13y",
    "beta14y": "beta_14y",
    "beta15y": "beta_15y",
    "beta16y": "beta_16y",
    "beta17y": "beta_17y",
    "beta18y": "beta_18y",
    "beta19y": "beta_19y",
    "beta20y": "beta_20y",
    "avgvol30days": "volume_avg_30d",
    "aum": "nav",
    "top10holdings": "holdings_top10",
    "top10holdingsummary": "holdings_top10_summary",
    "totalreturn6month": "return_6m",
    "totalreturn10year": "return_10y",
    "managementfee": "management_fee",
    "altData": "additional_data",
}


def get_all_etfs() -> pd.DataFrame:
    """Gets a summary of the TMX Group ETFs universe.

    Returns
    -------
    pd.DataFrame
        DataFrame with a universe summary.
    """

    # Caches the request for 4 hours to make subsequent queries faster.
    r = tmx_etfs_session.get(
        "https://dgr53wu9i7rmp.cloudfront.net/etfs/etfs.json", timeout=10
    )

    if r.status_code != 200:
        raise RuntimeError(r.status_code)

    etfs = pd.DataFrame(r.json())

    etfs = etfs.rename(columns=(COLUMNS_DICT))

    etfs = etfs.drop(
        columns=[
            "beta_2y",
            "beta_4y",
            "beta_6y",
            "beta_7y",
            "beta_8y",
            "beta_9y",
            "beta_11y",
            "beta_12y",
            "beta_13y",
            "beta_14y",
            "beta_16y",
            "beta_17y",
            "beta_18y",
            "beta_19y",
        ]
    )

    return etfs.replace("-", None).convert_dtypes()
