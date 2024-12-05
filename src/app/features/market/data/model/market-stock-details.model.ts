export type MarketStockDetailsModel = {
    stockId: string;
    symbol: string;
    name: string;
    sector: string;
    description: string;
    meta_data_list : {
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
        dayChange: number;
        dayChangePercent: number;
    }[];
}