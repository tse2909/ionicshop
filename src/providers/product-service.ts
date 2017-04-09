import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ImageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductService {


  rooturl = "http://localhost:3000";

  constructor(public http: Http) {
    console.log('Hello ImageService Provider');
    this.http = http;
  }

  getProduct() {

    // let url = this.rooturl + "'&$top=10";

    let headers = new Headers();

    return this.http.get(this.rooturl+"/getProducts",)
    .do((res: Response) => console.log(res))
    .map((res: Response) => res.json().body)
    // .map((res: Response) => res.json())
      // .map(res => res.json())


  }

}
