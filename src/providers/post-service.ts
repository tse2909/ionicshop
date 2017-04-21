import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostService {
  url = 'http://hostingtrial.esy.es/wp-json/wp/v2/posts';
  constructor(public http: Http) {
   
  }

  getPosts(){
   return this.http.get(this.url).map(k=> k.json());
  }

}
