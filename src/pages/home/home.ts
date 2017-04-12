import { Component } from '@angular/core';
import { data } from '../../mockdata/product';
import { NavController } from 'ionic-angular';
import {SQLite} from "ionic-native";
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
   public database: SQLite;
   public people: Array<Object>;
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
        
         this.database = new SQLite();
            this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
                this.refresh();
            }, (error) => {
                console.log("ERROR: ", error);
            });
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
public add() {
        this.database.executeSql("INSERT INTO people (firstname, lastname) VALUES ('Nic', 'Raboy')", []).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
    }
 
    public refresh() {
        this.database.executeSql("SELECT * FROM people", []).then((data) => {
            this.people = [];
            if(data.rows.length > 0) {
                for(var i = 0; i < data.rows.length; i++) {
                    this.people.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }
}
