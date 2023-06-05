import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    
    const params = new HttpParams({ fromString: request.params.toString() });
    
    const modifiedParams = params.append('apikey', environment.apikey);
    
    const modifiedRequest = request.clone({
      params: modifiedParams,
    });
    
    return next.handle(modifiedRequest);
  }
}
