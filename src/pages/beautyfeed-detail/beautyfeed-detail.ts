import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BeautyfeedDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-beautyfeed-detail',
  templateUrl: 'beautyfeed-detail.html'
})
export class BeautyfeedDetailPage {
  post:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.post = this.navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeautyfeedDetailPage');
  }

}
