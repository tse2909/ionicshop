import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {getProductsAsArry, getCalculatedCartList, getCartState, getCartCnt} from '../../reducers';
import { Store } from '@ngrx/store';
/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  cart:any;


  cartState: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private store:Store<any>) {
  this.cart = this.store.let(getCalculatedCartList());
  this.cartState = this.store.let(getCartCnt());
  console.log(this.cart);
  console.log(this.cartState);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
