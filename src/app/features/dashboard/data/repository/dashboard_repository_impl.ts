import { Observable } from "rxjs";
import { SearchStock } from "../model/search_stock.model";
import { DashboardDataSourceImpl, DashboardRemoteDataSource } from "../datasource/dashboard_remote_datasource";
import { ApiService } from "../../../../core/services/api.service";
import { Injectable } from "@angular/core";

interface DashboardRepository {
    searchStocks(searchTerm: string): Observable<SearchStock[]>;
}

@Injectable({
    providedIn: 'root'
})
export class DashboardRepositoryImpl implements DashboardRepository {
    private _remoteDataSource: DashboardRemoteDataSource;

    constructor(private readonly _apiService: ApiService) {
        this._remoteDataSource = new DashboardDataSourceImpl(_apiService);
    }

    searchStocks(searchTerm: string): Observable<SearchStock[]> {
        return new Observable<SearchStock[]>((observer) => {
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
}