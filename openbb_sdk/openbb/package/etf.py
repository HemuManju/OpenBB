### THIS FILE IS AUTO-GENERATED. DO NOT EDIT. ###

from typing import List, Literal, Optional, Union

from openbb_core.app.model.custom_parameter import OpenBBCustomParameter
from openbb_core.app.model.obbject import OBBject
from openbb_core.app.static.container import Container
from openbb_core.app.static.filters import filter_inputs
from pydantic import validate_arguments
from typing_extensions import Annotated


class CLASS_etf(Container):
    """/etf
    holdings
    search
    """

    def __repr__(self) -> str:
        return self.__doc__ or ""

    @validate_arguments
    def holdings(
        self,
        symbol: Annotated[
            Union[str, List[str]],
            OpenBBCustomParameter(
                description="The exchange ticker symbol for the ETF."
            ),
        ],
        provider: Optional[Literal["blackrock", "fmp", "tmx"]] = None,
        **kwargs
    ) -> OBBject[List]:
        """Get the holdings for an individual ETF.

        Parameters
        ----------
        symbol : Union[str, List[str]]
            The exchange ticker symbol for the ETF.
        provider : Optional[Literal['blackrock', 'fmp', 'tmx']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'blackrock' if there is
            no default.
        date : Union[str, datetime.date, NoneType]
            The as-of date for historical daily holdings. (provider: blackrock, fmp)
        country : Optional[Literal['america', 'canada']]
            The country the ETF is registered in. (provider: blackrock)

        Returns
        -------
        OBBject
            results : List[EtfHoldings]
                Serializable results.
            provider : Optional[Literal['blackrock', 'fmp', 'tmx']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            metadata: Optional[Metadata]
                Metadata info about the command execution.

        EtfHoldings
        -----------
        symbol : Optional[str]
            The asset's ticker symbol. (provider: blackrock); The ticker symbol of the holding. (provider: fmp); The ticker symbol of the asset. (provider: tmx)
        name : Optional[str]
            The name of the asset. (provider: blackrock, fmp, tmx)
        weight : Union[float, str, NoneType]
            The weight of the holding. (provider: blackrock, fmp); The weight of the asset in the portfolio. (provider: tmx)
        price : Union[float, str, NoneType]
            The price-per-share of the asset. (provider: blackrock)
        shares : Union[int, str, NoneType]
            The number of shares held. (provider: blackrock); The value of the assets under management. (provider: tmx)
        market_value : Union[float, str, NoneType]
            The market value of the holding. (provider: blackrock, tmx)
        notional_value : Union[float, str, NoneType]
            The notional value of the holding. (provider: blackrock)
        asset_class : Optional[str]
            The asset class of the asset. (provider: blackrock)
        sector : Optional[str]
            The sector the asset belongs to. (provider: blackrock)
        isin : Optional[str]
            The ISIN of the asset. (provider: blackrock); The ISIN of the holding. (provider: fmp)
        sedol : Optional[str]
            The SEDOL of the asset. (provider: blackrock)
        cusip : Optional[str]
            The CUSIP of the asset. (provider: blackrock); The CUSIP of the holding. (provider: fmp)
        exchange : Optional[str]
            The exchange the asset is traded on. (provider: blackrock); The exchange code of the holding. (provider: tmx)
        country : Optional[str]
            The location of the risk exposure is. (provider: blackrock); The country of the holding. (provider: fmp); The country of the holding. (provider: tmx)
        currency : Optional[str]
            The currency of the asset. (provider: blackrock); The currency of the holding. (provider: fmp); The currency of the holding. (provider: tmx)
        market_currency : Optional[str]
            The currency for the market the asset trades in. (provider: blackrock)
        fx_rate : Optional[float]
            The exchange rate of the asset against the fund's base currency. (provider: blackrock)
        coupon : Union[float, str, NoneType]
            The coupon rate of the asset. (provider: blackrock)
        par_value : Union[float, str, NoneType]
            The par value of the asset. (provider: blackrock)
        ytm : Union[float, str, NoneType]
            The yield-to-maturity of the asset. (provider: blackrock)
        real_ytm : Union[float, str, NoneType]
            The real yield-to-maturity of the asset. (provider: blackrock)
        yield_to_worst : Union[float, str, NoneType]
            The yield-to-worst of the asset. (provider: blackrock)
        duration : Union[float, str, NoneType]
            The duration of the asset. (provider: blackrock)
        real_duration : Union[float, str, NoneType]
            The real duration of the asset. (provider: blackrock)
        yield_to_call : Union[float, str, NoneType]
            The yield-to-call of the asset. (provider: blackrock)
        mod_duration : Union[float, str, NoneType]
            The modified duration of the asset. (provider: blackrock)
        maturity : Union[float, str, NoneType]
            The maturity date of the asset. (provider: blackrock)
        accrual_date : Union[str, date, NoneType]
            The accrual date of the asset. (provider: blackrock)
        effective_date : Union[str, date, NoneType]
            The effective date of the asset. (provider: blackrock)
        lei : Optional[str]
            The LEI of the company. (provider: fmp)
        title : Optional[str]
            The title of the holding. (provider: fmp)
        balance : Optional[float]
            The balance of the holding. (provider: fmp)
        units : Union[float, str, NoneType]
            The units of the holding. (provider: fmp)
        value : Optional[float]
            The value of the holding in USD. (provider: fmp)
        payoff_profile : Optional[str]
            The payoff profile of the holding. (provider: fmp)
        asset_category : Optional[str]
            The asset category of the holding. (provider: fmp)
        issuer_category : Optional[str]
            The issuer category of the holding. (provider: fmp)
        is_restricted : Optional[str]
            Whether the holding is restricted. (provider: fmp)
        fair_value_level : Optional[int]
            The fair value level of the holding. (provider: fmp)
        is_cash_collateral : Optional[str]
            Whether the holding is cash collateral. (provider: fmp)
        is_non_cash_collateral : Optional[str]
            Whether the holding is non-cash collateral. (provider: fmp)
        is_loan_by_fund : Optional[str]
            Whether the holding is loan by fund. (provider: fmp)
        share_percentage : Optional[float]
            The share percentage of the holding. (provider: tmx)
        share_change : Union[float, str, NoneType]
            The change in shares of the holding. (provider: tmx)
        type_id : Optional[str]
            The holding type ID of the asset. (provider: tmx)
        fund_id : Optional[str]
            The fund ID of the asset. (provider: tmx)"""  # noqa: E501

        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "symbol": ",".join(symbol) if isinstance(symbol, list) else symbol,
            },
            extra_params=kwargs,
        )

        return self._command_runner.run(
            "/etf/holdings",
            **inputs,
        )

    @validate_arguments
    def search(
        self,
        query: Annotated[
            Optional[str], OpenBBCustomParameter(description="Search query.")
        ] = "",
        provider: Optional[Literal["blackrock", "fmp", "tmx"]] = None,
        **kwargs
    ) -> OBBject[List]:
        """Fuzzy search for ETFs. An empty query returns the full list of ETFs from the provider.

        Parameters
        ----------
        query : Optional[str]
            Search query.
        provider : Optional[Literal['blackrock', 'fmp', 'tmx']]
            The provider to use for the query, by default None.
            If None, the provider specified in defaults is selected or 'blackrock' if there is
            no default.
        country : Literal['america', 'canada']
            The country the ETF is registered in. (provider: blackrock)
        exchange : Optional[Literal['AMEX', 'NYSE', 'NASDAQ', 'ETF', 'TSX', 'EURONEXT']]
            The exchange code the ETF trades on. (provider: fmp)
        is_active : Optional[Literal[True, False]]
            Whether the ETF is actively trading. (provider: fmp)
        div_freq : Optional[Literal['monthly', 'annually', 'quarterly']]
            The dividend payment frequency. (provider: tmx)
        sort_by : Optional[Literal['aum', 'return_1m', 'return_3m', 'return_6m', 'return_1y', 'return_3y', 'return_ytd', 'beta_1y', 'volume_avg_daily', 'management_fee', 'distribution_yield', 'pb_ratio', 'pe_ratio']]
            The column to sort by. (provider: tmx)

        Returns
        -------
        OBBject
            results : List[EtfSearch]
                Serializable results.
            provider : Optional[Literal['blackrock', 'fmp', 'tmx']]
                Provider name.
            warnings : Optional[List[Warning_]]
                List of warnings.
            chart : Optional[Chart]
                Chart object.
            metadata: Optional[Metadata]
                Metadata info about the command execution.

        EtfSearch
        ---------
        symbol : Optional[str]
            The exchange ticker symbol for the ETF.
        name : Optional[str]
            Name of the ETF.
        asset_class : Optional[str]
            The asset class of the ETF. (provider: blackrock)
        sub_asset_class : Optional[str]
            The sub-asset class of the ETF. (provider: blackrock)
        region : Optional[str]
            The region of the ETF. (provider: blackrock)
        country : Optional[str]
            The country the ETF is registered in. (provider: blackrock, fmp)
        market_type : Optional[str]
            The market type of the ETF. (provider: blackrock)
        investment_style : Optional[str]
            The investment style of the ETF. (provider: blackrock, tmx)
        investment_strategy : Optional[str]
            The investment strategy of the ETF. (provider: blackrock)
        aum : Union[float, NoneType, int]
            The value of the assets under management. (provider: blackrock, tmx)
        market_cap : Optional[float]
            The market cap of the ETF. (provider: fmp)
        sector : Optional[str]
            The sector of the ETF. (provider: fmp)
        industry : Optional[str]
            The industry of the ETF. (provider: fmp)
        beta : Optional[float]
            The beta of the ETF. (provider: fmp)
        price : Optional[float]
            The current price of the ETF. (provider: fmp)
        last_annual_dividend : Optional[float]
            The last annual dividend paid. (provider: fmp)
        volume : Optional[float]
            The current trading volume of the ETF. (provider: fmp)
        exchange : Optional[str]
            The exchange code the ETF trades on. (provider: fmp)
        exchange_name : Optional[str]
            The full name of the exchange the ETF trades on. (provider: fmp)
        actively_trading : Optional[Literal[True, False]]
            Whether the ETF is actively trading. (provider: fmp)
        return_1m : Optional[float]
            The one-month return. (provider: tmx)
        return_3m : Optional[float]
            The three-month return. (provider: tmx)
        return_ytd : Optional[float]
            The year-to-date return. (provider: tmx)
        close : Optional[float]
            The closing price. (provider: tmx)
        prev_close : Optional[float]
            The previous closing price. (provider: tmx)
        volume_avg_daily : Optional[int]
            The average daily volume. (provider: tmx)
        management_fee : Optional[float]
            The management fee. (provider: tmx)
        distribution_yield : Optional[float]
            The distribution yield. (provider: tmx)
        dividend_frequency : Optional[str]
            The dividend payment frequency. (provider: tmx)"""  # noqa: E501

        inputs = filter_inputs(
            provider_choices={
                "provider": provider,
            },
            standard_params={
                "query": query,
            },
            extra_params=kwargs,
        )

        return self._command_runner.run(
            "/etf/search",
            **inputs,
        )
