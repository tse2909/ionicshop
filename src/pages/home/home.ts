import { Component } from '@angular/core';
import { data } from '../../mockdata/product';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { ProductService } from '../../providers/product-service';
import { ProductDetailPage } from '../product-detail/product-detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  search: string;
  slides: any[];
  images: any[] = [];
  haveData: boolean = false;
  product: any;
  data = data;
  constructor(public navCtrl: NavController, public storage: Storage, public _productService: ProductService) {
    storage.ready().then(() => {
      this.storage.set('name', 'Mr. Ionitrontonton');
      // Storage is ready to use
      // Note: ready() is only available in 1.1.7 or greater!
    });

    // this._productService.getProduct().map(p => p.id).subscribe(productImage => {

    //   console.log(productImage);
    //   if (productImage.length >= 1) {
    // this.haveData = true;
    // this.slides = product;  
    // for (var i = 0; i < this.slides.length; i++) {
    //   this.images.push(this.slides[i].id)
    // }
    // console.log(this.images)

    // this.images.push(productImage)


    //   }
    // });

    this._productService.getProduct().subscribe(k => { this.product = JSON.parse(k); console.log(this.product) })
  }

  gotoDetails(product) {
    this.navCtrl.push(ProductDetailPage, { product })
  }

}
