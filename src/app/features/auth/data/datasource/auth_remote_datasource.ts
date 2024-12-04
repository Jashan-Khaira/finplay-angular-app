import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../../../../core/services/api.service";
import { Request } from "../../../../core/common/interfaces/request";
import { ServerExpection } from '../../../../core/error/server_expection';

export interface AuthRemoteDataSource {
    //TODO: Change it to return a User object or some other object
    signInWithEmailPassword(email: string, password: string): Observable<string>;

    //TODO: Change it to return a User object or some other object
    signUpWithEmailPassword(email: string, password: string, confirmPassword: string): Observable<string>;
}

export class AuthRemoteDataSourceImpl implements AuthRemoteDataSource {
    apiService: ApiService;
    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    signInWithEmailPassword(email: string, password: string): Observable<string> {
        const requestBody: Request = {
            email: email,
            password: password
        };
        return new Observable<string>((observer) => {
            this.apiService.post<string>('users/login', requestBody).subscribe({
                next: (response) => {
                    if (response == null) {
                        observer.error(new ServerExpection('Server response is null or undefined', 500));
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

    signUpWithEmailPassword(email: string, password: string, confirmPassword: string): Observable<string> {
        const requestBody = {
          email: email,
          password: password
        }

        return new Observable<string>((observer) => {
          this.apiService.post<string>('users/register', requestBody).subscribe({
            next: (response) => {
              if (response == null) {
                observer.error(new ServerExpection('Server response is null or undefined', 500));
              } else {
                observer.next(response);
                observer.complete();
              }
            },
            error: (error) => {
              observer.error(error);
            }
          })
        })

    }

}
