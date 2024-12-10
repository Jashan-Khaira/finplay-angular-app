import { Observable } from "rxjs";
import { MarketStocks } from "../model/market-stocks.model";
import { MarketStockDetailsModel } from '../model/market-stock-details.model';
import { ApiService } from "../../../../core/services/api.service";

export interface MarketRemoteDataSource {
    searchStocks(searchTerm: string): Observable<MarketStocks[]>;
    searchStocksBySymbol(symbol: string): Observable<MarketStockDetailsModel>;
    buyStock(userId: string, symbol: string, quantity: number, price: number) : Observable<string>;
}

export class MarketRemoteDataSourceImpl implements MarketRemoteDataSource {
    private _apiService: ApiService;

    constructor(apiService: ApiService) {
        this._apiService = apiService;
    }

    buyStock(userId: string, symbol: string, quantity: number, price: number): Observable<string> {
        return new Observable<string>((observer) => {
            const url = `market/trade/buy?userId=${userId}&stockSymbol=${symbol}&quantity=${quantity}&price=${price}`;
            this._apiService.post<string>(url).subscribe({
                next: (response) => {
                    if (response == null) {
                        observer.error(new Error('Server response is null or undefined'));
                    } else {
                        observer.next(response);
                        observer.complete();
                    }
                },
                error: (error) => {
                    observer.error(error);
                }
            });
        });
    }

    searchStocks(searchTerm: string): Observable<MarketStocks[]> {
        const params = new Map<string, string>();
        params.set('keyword', searchTerm);
        return new Observable<MarketStocks[]>((observer) => {
            this._apiService.get<MarketStocks[]>('stocks/search-latest', params).subscribe({
                next: (response) => {
                    if (response == null) {
                        observer.error(new Error('Server response is null or undefined'));
                    } else {
                        observer.next(response);
                        observer.complete();
                    }
                },
                error: (error) => {
                    observer.error(error);
                }
            });
        });
    }
    searchStocksBySymbol(symbol: string): Observable<MarketStockDetailsModel> {
        const params = new Map<string, string>();
        params.set('keyword', symbol);
        return new Observable<MarketStockDetailsModel>((observer) => {
            this._apiService.get<MarketStocks[]>('stocks/search', params).subscribe({
                next: (response) => {
                    if (response == null) {
                        observer.error(new Error('Server response is null or undefined'));
                    } else {
                        const meta_data : any[] = []                        

                        for (let item of response) {
                            const date = new Date(item.date);

                            const data = {
                                date: date,
                                open: item.open,
                                high: item.high,
                                low: item.low,
                                close: item.close,
                                volume: item.volume,
                                dayChange: item.dayChange,
                                dayChangePercent: item.dayChangePercent
                            }

                            meta_data.push(data);
                        }

                        const stockDetails: MarketStockDetailsModel = {
                            stockId: response[0].stockId,
                            symbol: response[0].symbol,
                            name: response[0].name,
                            sector: response[0].sector,
                            description: response[0].description,
                            meta_data_list: meta_data
                        }

                        observer.next(stockDetails);
                        observer.complete();
                    }
                },
                error: (error) => {
                    observer.error(error);
                }
            });
        });
    }

}