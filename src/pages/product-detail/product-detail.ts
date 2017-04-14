import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import {getProducts, addToCart} from '../../actions/products';
import {getProductsAsArry, getCalculatedCartList} from '../../reducers';
import { Subject } from 'rxjs';
import {Store, Action} from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
/*
  Generated class for the ProductDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {

  cartList: any;
  products: Observable<any[]>;
  actions$ = new Subject<Action>();
  addToCartAction = addToCart;
  public product;
  qty: number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public store: Store<any>) {
    this.products = store.let(getProductsAsArry());
    console.log(this.products);
    this.cartList = store.let(getCalculatedCartList());

    this.actions$.subscribe(store);
    this.actions$.next(getProducts());

    this.product = this.navParams.get('product');
    console.log(this.product);
  }

  ionViewDidLoad() {
    this.app.setTitle(this.product.name);
    console.log('ionViewDidLoad ProductDetailPage');
  }


}
