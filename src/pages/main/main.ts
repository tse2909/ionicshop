import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { BeautyfeedPage } from '../beautyfeed/beautyfeed';
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
  private aboutPage;
  private contactPage;
  private rootPage;
  private beautyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.rootPage = HomePage;
    this.aboutPage = AboutPage;
    this.homePage = HomePage;
    this.contactPage = ContactPage;
    this.beautyPage = BeautyfeedPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  openPage(p){
    this.rootPage = p;
  }
}
