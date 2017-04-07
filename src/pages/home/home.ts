import { Component } from '@angular/core';
import { data } from '../../mockdata/product';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data = data;
  constructor(public navCtrl: NavController, public storage: Storage) {
    storage.ready().then(() => {
      this.storage.set('name', 'Mr. Ionitrontonton');
      // Storage is ready to use
      // Note: ready() is only available in 1.1.7 or greater!
    });
  }


}
