"""The Portfolio Engine router."""
import warnings
from typing import List

import pandas as pd
from openbb_core.app.model.system_settings import SystemSettings
from openbb_core.app.router import Router
from openbb_core.app.utils import df_to_basemodel
from openbb_core.provider.abstract.data import Data

router = Router(prefix="")


@router.command(methods=["POST"])
def read_transactions(path: str) -> List[Data]:
    """Read static method to read transactions from file.

    Parameters
    ----------
    path: str
        path to transactions file

    Returns
    -------
    List[Data]
        List[Data] with transactions
    """
    # Load transactions from file
    if path.endswith(".xlsx"):
        if not SystemSettings().test_mode:
            warnings.filterwarnings("ignore", category=UserWarning, module="openpyxl")
        transactions = pd.read_excel(path)
    elif path.endswith(".csv"):
        transactions = pd.read_csv(path)

    return df_to_basemodel(transactions)
