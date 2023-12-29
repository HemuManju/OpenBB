"""The Metrics router."""

import os
from typing import Dict, List

import pandas as pd
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.router import Router
from openbb_core.app.utils import basemodel_to_df
from openbb_core.provider.abstract.data import Data
from openbb_potfolio.helpers import PERIODS_DAYS
from pydantic import PositiveFloat

router = Router(prefix="")


@router.command(methods=["POST"])
def rolling_volatility(
    portfolio_returns: List[Data], window: str = "1y"
) -> OBBject[Dict]:
    """Get rolling volatility

    Parameters
    ----------
    portfolio_returns : pd.Series
        Series of portfolio returns
    window : str
        Rolling window size to use

    Returns
    -------
    pd.DataFrame
        Rolling volatility DataFrame
    """
    # Convert from basemodel to dataframe
    portfolio_returns = basemodel_to_df(portfolio_returns)

    length = PERIODS_DAYS[window]
    sample_length = len(portfolio_returns)

    if length > sample_length:
        print(  # noqa: T201
            f"Window length ({window}->{length}) is larger than returns length ({sample_length})",
            "Try a smaller window",
            sep=os.linesep,
        )
        return pd.DataFrame()

    # max(2, length) -> std needs at least 2 observations
    results = {"rolling_volatility": portfolio_returns.rolling(max(2, length)).std()}
    return OBBject(results=results)


@router.command(methods=["POST"])
def sharpe_ratio(
    portfolio_returns: List[Data], risk_free_rate: PositiveFloat
) -> OBBject[Dict]:
    """Get sharpe ratio

    Parameters
    ----------
    return_series : pd.Series
        Series of portfolio returns
    risk_free_rate: float
        Value to use for risk free rate

    Returns
    -------
    float
        Sharpe ratio
    """
    mean = portfolio_returns.mean() - risk_free_rate
    sigma = portfolio_returns.std()
    result = {"sharpe_ration": mean / sigma}

    return OBBject(results=result)
