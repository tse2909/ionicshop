import { Component, Input } from '@angular/core';

/*
  Generated class for the CartList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'cart-list',
  templateUrl: 'cart-list.html'
})
export class CartListComponent {
  @Input() cart;
  text: string;
  
  constructor() {
    console.log(this.cart);
    this.text = 'Hello World';
  }

  ngOnInit(){
    console.log(this.cart)
  }
}