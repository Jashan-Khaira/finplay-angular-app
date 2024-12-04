export type SearchStock = {
    stockId: string;
    symbol: string;
    name: string;
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    dayChange: number;
    dayChangePercent: number;
    dividends: number;
    stockSplits: number;
    sector: string;
    description: string;
}