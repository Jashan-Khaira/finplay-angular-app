import { HttpInterceptorFn } from "@angular/common/http";

export const RequestInterceptor : HttpInterceptorFn = (req, next) => {
    const request = req.clone({
        setHeaders: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })

    return next(request);
}