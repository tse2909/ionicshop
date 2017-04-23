import { Component, Input, Output, EventEmitter } from '@angular/core';

/*
  Generated class for the ProductList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListComponent {
  @Input() products: any;
  text: string;

  @Output()
  gotoDetails = new EventEmitter<any>();

  constructor() {
    console.log('Hello ProductList Component');
    this.text = 'Hello World';
  }
}
