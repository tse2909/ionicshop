import { Component } from '@angular/core';
import { data } from '../../mockdata/product';
import { NavController, LoadingController } from 'ionic-angular';
import {SQLite} from "ionic-native";
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { ProductService } from '../../providers/product-service';
import { ProductDetailPage } from '../product-detail/product-detail';

import {getProducts, addToCart} from '../../actions/products';
import {getProductsAsArry, getCalculatedCartList} from '../../reducers';
import { Subject } from 'rxjs';
import {Store, Action} from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    cart: any;
    products: Observable<any[]>;
    actions$ = new Subject<Action>();


    public database: SQLite;
    public people: Array<Object>;
    search: string;
    slides: any[];
    images: any[] = [];
    haveData: boolean = false;
    product: any;
    data = data;
    constructor(public navCtrl: NavController, public storage: Storage, public _productService: ProductService, public store: Store<any>, public loading: LoadingController) {
        this.products = store.let(getProductsAsArry());
        console.log(this.products);
        this.cart = store.let(getCalculatedCartList());

        this.actions$.subscribe(store);
        this.actions$.next(getProducts());
        storage.ready().then(() => {
            this.storage.set('name', 'Mr. Ionitrontonton');
            // Storage is ready to use
            // Note: ready() is only available in 1.1.7 or greater!

            this.database = new SQLite();
            this.database.openDatabase({ name: "data.db", location: "default" }).then(() => {
                this.refresh();
            }, (error) => {
                console.log("ERROR: ", error);
            });
        });

        
        // this._productService.getProductEffect();
    }
    ionViewLoaded() {
        let loader = this.loading.create({
            content: 'Getting latest entries...',
        });
        loader.present().then(() => {
            this._productService.getProduct().subscribe(k => { this.product = JSON.parse(k); console.log(this.product) });
            loader.dismiss();
        });
    }
            
    gotoDetails(product) {
        this.navCtrl.push(ProductDetailPage, { product })
    }


    public refresh() {
        this.database.executeSql("SELECT * FROM people", []).then((data) => {
            this.people = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.people.push({ firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname });
                }
            }
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
    }
}
