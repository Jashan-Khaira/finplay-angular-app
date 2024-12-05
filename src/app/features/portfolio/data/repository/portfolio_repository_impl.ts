import { Observable } from "rxjs";
import { Portfolio } from "../../model/portfolio.model";
import { Injectable } from "@angular/core";
import { ApiService } from "../../../../core/services/api.service";
import { PortfolioRemoteDataSource, PortfolioRemoteDataSourceImpl } from "../datasource/portfolio_remote_datasource";

interface PortfolioRepository {
    getPortfolio(userId: string): Observable<Portfolio>;
}

@Injectable({
    providedIn: 'root'
})
export class PortfolioRepositoryImpl implements PortfolioRepository {
    private _remoteDataSource: PortfolioRemoteDataSource;

    constructor(private readonly _apiService: ApiService) {
        this._remoteDataSource = new PortfolioRemoteDataSourceImpl(_apiService);
    }

    getPortfolio(userId: string): Observable<Portfolio> {
        return new Observable<Portfolio>((observer) => {
            this._remoteDataSource.getPortfolio(userId).subscribe({
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