import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ConsultService} from "./consult.service";
import {Consult} from "../types/types";

@Injectable({
  providedIn: 'root'
})
export class ConsultsResolver implements Resolve<Consult[]> {
  constructor(private service: ConsultService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Consult[]> {
    return this.service.getConsults();
  }
}
