import { HttpInterceptorFn } from "@angular/common/http";

export const RequestInterceptor : HttpInterceptorFn = (req, next) => {
    const request = req.clone({

    })

    return next(request);
}