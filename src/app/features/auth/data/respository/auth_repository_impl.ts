import { Observable } from "rxjs";
import { Failure } from "../../../../core/error/failure";
import { AuthRemoteDataSource, AuthRemoteDataSourceImpl } from "../datasource/auth_remote_datasource";
import { Injectable } from "@angular/core";
import { ApiService } from "../../../../core/services/api.service";

interface AuthRepository {
    signInWithEmailPassword(email: string, password: string): Observable<string>;
}

@Injectable({
    providedIn: 'root'
})
export class AuthRepositoryImpl implements AuthRepository {
    remoteDataSource: AuthRemoteDataSource;
    
    constructor(private readonly apiService: ApiService) {
        this.remoteDataSource = new AuthRemoteDataSourceImpl(apiService);
    }

    signInWithEmailPassword(email: string, password: string): Observable<string> {
        return new Observable<string>((observer) => {
            this.remoteDataSource.signInWithEmailPassword(email, password).subscribe({
                next: () => {
                    observer.next();
                    observer.complete();
                },
                error: (err) => {
                    observer.error(new Failure(err.message, err.status));
                }
            });
        });
    }

}