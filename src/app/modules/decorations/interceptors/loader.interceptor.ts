import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../../decorations/services/loading.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private _loader: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._loader.switchLoading();
    return next
      .handle(request)
      .pipe(finalize(() => this._loader.switchLoading()));
  }
}
