import { Component } from '@angular/core';

/*
  Generated class for the CartButton component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'cart-button',
  templateUrl: 'cart-button.html'
})
export class CartButtonComponent {

  text: string;

  constructor() {
    console.log('Hello CartButton Component');
    this.text = 'Hello World';
  }

}
