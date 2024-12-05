import { Observable } from "rxjs";
import { Portfolio } from "../../model/portfolio.model";
import { ApiService } from "../../../../core/services/api.service";

export interface PortfolioRemoteDataSource {
    getPortfolio(userId: string) : Observable<Portfolio>;
}


export class PortfolioRemoteDataSourceImpl implements PortfolioRemoteDataSource {

    apiService: ApiService;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    getPortfolio(userId: string): Observable<Portfolio> {
        const params = new Map<string, string>();
        params.set('userId', userId);

        return new Observable<Portfolio>((observer) => {
            this.apiService.get<Portfolio>('portfolio/'+userId).subscribe({
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
        })
    }
}