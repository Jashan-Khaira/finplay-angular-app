import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { JwtService } from "../services/jwt.service";

export const TokenInterceptor : HttpInterceptorFn = (req, next) => {
    const token = inject(JwtService).getToken();

    const request = req.clone({
        setHeaders: {
            ...(token ? { Authorization: `Bearer ${token}` } : {})
        }
    });

    return next(request);
}