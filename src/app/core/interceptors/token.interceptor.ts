import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { JwtService } from "../services/jwt.service";

export const TokenInterceptor : HttpInterceptorFn = (req, next) => {
    const token = inject(JwtService).getToken();

    if(!req.url.includes('login') && !req.url.includes('register')) {
        const request = req.clone({
            setHeaders: {
                ...(token ? { Authorization: `Bearer ${token}` } : {})
            }
        });
        return next(request);
    }

    return next(req);

}