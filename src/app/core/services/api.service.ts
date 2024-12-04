import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.dev";
import { Request } from "../common/interfaces/request";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl : string = environment.apiUrl;

  constructor(private readonly httpClient: HttpClient) {

  }

  private getHeaders() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }

  get<T>(url: string, params: Map<string, string>): Observable<T> {
    const htppParams = new HttpParams();

    params.forEach((value, key) => {
      htppParams.set(key, value);
    });

    return this.httpClient.get<T>(`${this.baseUrl}/${url}`, { params: htppParams });
  }

  post<T>(url: string, body: Request) : Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}/${url}` ,body, { headers: this.getHeaders()});
  }

  put<T>(url: string, body: Request) : Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}/${url}`, body);
  }
}
