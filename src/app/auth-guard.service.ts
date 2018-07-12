import {Injectable} from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras, CanLoad, Data, Route
} from '@angular/router';
import {DataBearerService} from './data-bearer.service';
@Injectable()
export class AuthGuardService implements CanLoad {

    constructor(private databearerService: DataBearerService, private router: Router) {
    }

    canLoad(route: Route): boolean {
        if (this.databearerService.getUserLoggedInStatus()) {
            return false;
        } else {
            return true;
        }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.databearerService.getUserLoggedInStatus()) {
            this.router.navigate(['films']);
            return false;
        } else {
            return true;
        }
    }

}
