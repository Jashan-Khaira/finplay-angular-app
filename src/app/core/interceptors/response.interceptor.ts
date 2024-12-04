import { HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { tap } from "rxjs";
import { JwtService } from "../services/jwt.service";
import { inject } from "@angular/core";

export const ResponseInterceptor: HttpInterceptorFn = (req, next) => {
    const jwtService = inject(JwtService);

    if(req.url.includes('login')) {
        return next(req).pipe(
            tap((event) => {
                if(event instanceof HttpResponse) {
                    console.log('Response Interceptor', event);
                    const body : any = event.body;
                    
                    if(body && body['accessToken']) {
                        jwtService.saveToken(body['accessToken']);
                    }
                }
            })
        );
    }

    return next(req);
};