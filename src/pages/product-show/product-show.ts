import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {getProducts, addToCart} from '../../actions/products';
import {getProductsAsArry, getCalculatedCartList} from '../../reducers';
import { Subject } from 'rxjs';
import {Store, Action} from '@ngrx/store';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import { ProductDetailPage } from '../product-detail/product-detail';

/*
  Generated class for the ProductShow page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-show',
  templateUrl: 'product-show.html'
})
export class ProductShowPage {

  data;
  brandProducts;
  brandProductList;

  products: Observable<any[]>;
  actions$ = new Subject<Action>();
  constructor(public navCtrl: NavController, public navParams: NavParams, public store: Store<any>) {
    this.data = this.navParams.get('data');
    this.products = store.let(getProductsAsArry());
    console.log(this.products);
    console.log(this.data.type);

    this.products.subscribe(k => this.brandProducts = k);

    if (this.data.type === 'ALL') {
      if (this.data.filter === 'HOT') {
        this.brandProductList = this.brandProducts
      } else if (this.data.filter === 'NEW') {
        this.brandProductList = this.brandProducts
      }
    } else if (this.data.type === 'TAGS') {
      this.brandProductList = this.brandProducts.filter(item =>
        item.tags.length ? item.tags[0].name === this.data.filter : '' === this.data.filter);
      console.log(this.brandProductList);
    } else if (this.data.type === 'CATEGORIES') {
      this.brandProductList = this.brandProducts.filter(item =>
        item.categories[0].name === this.data.filter);
      console.log(this.brandProductList);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductShowPage');
  }

  gotoDetails(product) {
    this.navCtrl.push(ProductDetailPage, { product });
  }

}
