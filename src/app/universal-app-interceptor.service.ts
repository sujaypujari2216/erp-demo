import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthLoginService } from './login/auth-login.service';
import { JWTTokenServiceService } from './jwttoken-service.service';

@Injectable()
export class UniversalAppInterceptorService  {
 
  constructor( private authService: JWTTokenServiceService) { }
 
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.jwtToken;
    req = req.clone({
      url:  req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);
  }
}
