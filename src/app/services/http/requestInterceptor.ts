// import { Injectable } from '@angular/core';
// import {
//     HttpEvent, HttpInterceptor, HttpHeaders, HttpHandler, HttpRequest, HTTP_INTERCEPTORS
// } from '@angular/common/http';

// import { Observable } from 'rxjs';

// /** Pass untouched request through to the next request handler. */
// @Injectable()

// class RequestInterceptor implements HttpInterceptor {

//     intercept(req: HttpRequest<any>, next: HttpHandler):
//         Observable<HttpEvent<any>> {
//         const newReq = req.clone({
//             headers: new HttpHeaders({
//                 'Accept': 'application/json'
//             })
//         });

//         return next.handle(newReq);
//     }
// }

// /** Http interceptor providers in outside-in order */
// export const httpRequestInterceptorProviders = [
//     { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
// ];
