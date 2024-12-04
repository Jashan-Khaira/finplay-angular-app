import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { JwtService } from "../services/jwt.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthGaurd implements CanActivate {
    constructor(private jwtService: JwtService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(route.routeConfig && route.routeConfig.path?.includes('auth')) {
        if (!this.jwtService.getToken()) {
            return true;
        } else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    }else {
        if (this.jwtService.getToken()) {
            return true;
        } else {
            this.router.navigate(['/auth/sign-in']);
            return false;
        }
    }
    }
}