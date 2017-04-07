import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public storage: Storage) {
    storage.ready().then(() => {
      this.storage.get('name').then((name) => {
        console.log('Me: Hey, ' + name + '! You have a very nice name.');
        console.log('You: Thanks! I got it for my birthday.');
      });
    });
  }

}
