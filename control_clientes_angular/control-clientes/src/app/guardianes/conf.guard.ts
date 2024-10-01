import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { ConfiguracionService } from "../servicios/configuracion.service";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class ConfGuard implements CanActivate {

    constructor(private router: Router, private configuracionService: ConfiguracionService) {
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return this.configuracionService.getConfiguracion().pipe(
            map(configuracion => {
                if (configuracion?.permitirRegistro) {
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        );
    }

}