import { HttpEventType, HttpInterceptorFn } from "@angular/common/http";
import { catchError, tap } from "rxjs";
import { Response } from "../common/interfaces/response";
import { Failure } from "../error/failure";
import { ServerExpection } from "../error/server_expection";

export const ErrorInterceptor : HttpInterceptorFn = (req, next) => {
    return next(req).pipe(tap(event => {
        if(event.type === HttpEventType.Response) {
            const response = event.body as Response<any>;

            if(!response.status) {
                throw new Failure(response.message, event.status);
            }
        }
    }),
    catchError((error) => {
        let errorMessage = 'An unknown error occurred';
      let statusCode = 500;

      // Check if the error has a message or status
      if (error?.error?.message) {
        errorMessage = error.error.message;
        statusCode = error.status || 500;
      }

        throw new ServerExpection(errorMessage, statusCode)
    }),
);
}