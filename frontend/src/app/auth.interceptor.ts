import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "./services/user.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  
  constructor(private userService: UserService){}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this.userService.CurrentUser;
    if(user.token){
      req = req.clone({
        setHeaders: {
          access_token: user.token
        }
      })
    }
    return next.handle(req);
      
  }
}