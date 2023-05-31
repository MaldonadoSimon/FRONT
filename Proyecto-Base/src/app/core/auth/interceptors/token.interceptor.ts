import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {SopSessionService} from 'ng-son-of-pandora';
import {environment} from '../../../../environments/environment';
import {UserService} from '../services/user/user.service';
import {AuthService} from '../services/user/auth.service';
import { Guid } from 'guid-ts';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements TokenInterceptor {

  isCalled: boolean;
  isExecutive: boolean;

  constructor(
    private sessionService: SopSessionService,
    private authService: AuthService,
    private userService: UserService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.userService.getUser() && !this.isCalled) {
      this.isCalled = true;
      this.isExecutive = false;
      this.setUser();
      this.setExecutive();
    }

    const authReq = req.clone({
      headers: req.headers
        .append('Authorization', `Bearer ${this.sessionService.getToken()}`)
        .append('x-module', !!req.headers.get('x-module') ? req.headers.get('x-module') : this.sessionService.getModuleId())
        .append('x-isapre', !!req.headers.get('x-isapre') ? req.headers.get('x-module') : environment.ISAPRE)
        .append('traceability', Guid.newGuid().toString())
    });
    return next.handle(authReq)
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );

  }

  private async setUser() {
    this.authService.setUser(await this.sessionService.getStorageKeyAsync('Afiliado'));
  }

  private async setExecutive() {
    try{
      this.authService.setExecutive(await this.sessionService.getStorageKeyAsync('Ejecutivo'));
      if (this.authService.getExecutive()){
        this.isExecutive = true;
      }
    }
    catch{
      this.isExecutive = false;
      console.error('No existe Ejecutivo');
    }
  }

}
