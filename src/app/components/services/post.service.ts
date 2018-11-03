import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpService) { }

  getPost() {
    return this.http.GET('', {});
  }

  delete (id) {
    return this.http.DELETE(id);
  }

  add (obj) {
    return this.http.POST(obj);
  }
  getSinglePost (id) {
    return this.http.PATCH(id);
  }
  updatePost (obj) {
    return this.http.PUT(obj);
  }
}
