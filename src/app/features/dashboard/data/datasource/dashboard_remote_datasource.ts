import { Observable } from "rxjs";
import { SearchStock } from "../model/search_stock.model";
import { ApiService } from "../../../../core/services/api.service";

export interface DashboardRemoteDataSource {
    searchStocks(searchTerm: string): Observable<SearchStock[]>;
}

export class DashboardDataSourceImpl implements DashboardRemoteDataSource {

    apiService: ApiService;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    searchStocks(searchTerm: string): Observable<SearchStock[]> {
        const params = new Map<string, string>();
        params.set('keyword', searchTerm);
        return new Observable<SearchStock[]>((observer) => {
            this.apiService.get<SearchStock[]>('stocks/search-latest', params).subscribe({
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
}