import { Observable } from "rxjs";
import { MarketStockDetailsModel } from "../model/market-stock-details.model";
import { MarketStocks } from "../model/market-stocks.model";
import { Injectable } from "@angular/core";
import { MarketRemoteDataSource, MarketRemoteDataSourceImpl } from "../datasource/market_remote_datasource";
import { ApiService } from "../../../../core/services/api.service";

interface MarketRepository {
    searchStocks(searchTerm: string): Observable<MarketStocks[]>;
    searchStocksBySymbol(symbol: string): Observable<MarketStockDetailsModel>;
    buyStock(userId: string, symbol: string, quantity: number, price: number) : Observable<string>;
}

@Injectable({
    providedIn: "root"
})
export class MarketRepositoryImpl implements MarketRepository {
    private _remoteDataSource: MarketRemoteDataSource;

    constructor(private readonly _apiServive : ApiService) {
        this._remoteDataSource = new MarketRemoteDataSourceImpl(_apiServive);
    }

    searchStocks(searchTerm: string): Observable<MarketStocks[]> {
        return new Observable<MarketStocks[]>((observer) => {
            this._remoteDataSource.searchStocks(searchTerm).subscribe({
                next: (_) => {
                    observer.next(_);
                    observer.complete();
                },
                error: (err) => {
                    observer.error(new Error(err.message));
                }
            });
        });
    }
    searchStocksBySymbol(symbol: string): Observable<MarketStockDetailsModel> {
        return new Observable<MarketStockDetailsModel>((observer) => {
            this._remoteDataSource.searchStocksBySymbol(symbol).subscribe({
                next: (_) => {
                    observer.next(_);
                    observer.complete();
                },
                error: (err) => {
                    observer.error(new Error(err.message));
                }
            });
        });
    }
    buyStock(userId: string, symbol: string, quantity: number, price: number): Observable<string> {
        return new Observable<string>((observer) => {
            this._remoteDataSource.buyStock(userId, symbol, quantity, price).subscribe({
                next: (_) => {
                    observer.next(_);
                    observer.complete();
                },
                error: (err) => {
                    observer.error(new Error(err.message));
                }
            });
        });
    }
}