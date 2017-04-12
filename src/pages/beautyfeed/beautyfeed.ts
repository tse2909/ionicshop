import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BeautyfeedDetailPage } from '../beautyfeed-detail/beautyfeed-detail';
import { PostService } from '../../providers/post-service';
/*
  Generated class for the Beautyfeed page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-beautyfeed',
  templateUrl: 'beautyfeed.html'
})
export class BeautyfeedPage {
  posts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _postService: PostService) {
    this._postService.getPosts().subscribe(k=> {this.posts = k; console.log(this.posts)})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeautyfeedPage');
    

  }
gotoDetails(post) {
    this.navCtrl.push(BeautyfeedDetailPage, { post })
  }
}
