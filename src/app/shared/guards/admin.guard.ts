import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AdminGuard implements CanActivate {
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate(['login']);
        }
      });
  }

}
