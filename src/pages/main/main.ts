import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BrandPage } from '../brand/brand';
import { ContactPage } from '../contact/contact';
import { BeautyfeedPage } from '../beautyfeed/beautyfeed';
import { ProductShowPage } from '../product-show/product-show';
import { CartPage } from '../cart/cart';
/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  private homePage;
  private brandPage;
  private contactPage;
  private rootPage;
  private beautyPage;
  private cartPage;
  private productPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.rootPage = HomePage;
    this.brandPage = BrandPage;
    this.homePage = HomePage;
    this.contactPage = ContactPage;
    this.beautyPage = BeautyfeedPage
    this.cartPage = CartPage;
    this.productPage = ProductShowPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p) {
    this.rootPage = p;
  }
  
  openProduct(filter){
    this.showSubmenu = !this.showSubmenu;
    var data = {
      type: 'TAGS',
      filter: filter
    }
    this.navCtrl.push(ProductShowPage, {data});
  }
  showSubmenu: boolean = false;

  menuItemHandler(): void {
    this.showSubmenu = !this.showSubmenu;
  }
}
