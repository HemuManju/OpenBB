from datetime import datetime

now = datetime.now()
PERIODS_DAYS = {
    "mtd": (now - datetime(now.year, now.month, 1)).days,
    "qtd": (
        now
        - datetime(
            now.year,
            1 if now.month < 4 else 4 if now.month < 7 else 7 if now.month < 10 else 10,
            1,
        )
    ).days,
    "ytd": (now - datetime(now.year, 1, 1)).days,
    "all": 1,
    "3m": 3 * 21,
    "6m": 6 * 21,
    "1y": 12 * 21,
    "3y": 3 * 12 * 21,
    "5y": 5 * 12 * 21,
    "10y": 10 * 12 * 21,
}
