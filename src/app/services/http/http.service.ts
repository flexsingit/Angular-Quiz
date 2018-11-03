import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor( private http: HttpClient , private httpClient: HttpClient) { }



  GET (URL, data) {
    URL = `${environment.API_PATH}${URL}`;
    let request, req = [];

    if (data ) {
      const keys = Object.keys(data);
      if ( keys && keys.length > 0) {
        req =   keys.map( e => `${e}=${data[e]}`);
      }
      request = `${URL}?${req.join('&')}`;
    }
    return this.http.get(request);
  }

  POST( request) {
   const  URL = `${environment.API_PATH}`;
    return this.http.post(URL, request);
  }

  DELETE(URL) {
    URL = `${environment.API_PATH}${URL}`;
    return this.http.delete(URL);
  }

  PATCH(id) {
    const URL = `${environment.API_PATH}${id}`;
    return this.http.patch(URL, {});
  }

  PUT(request) {
    const URL = `${environment.API_PATH}`;
    return this.http.post(URL, request);
  }
}
