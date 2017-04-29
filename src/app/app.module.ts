import { NgModule, ErrorHandler } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BeautyfeedPage } from '../pages/beautyfeed/beautyfeed';
import { MainPage } from '../pages/main/main';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { BeautyfeedDetailPage } from '../pages/beautyfeed-detail/beautyfeed-detail';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductService } from '../providers/product-service';
import { PostService } from '../providers/post-service';
import { CartButtonComponent } from '../components/cart-button/cart-button';
import { ProductItemComponent } from '../components/product-item/product-item';
import { ProductSlideComponent } from '../components/product-slide/product-slide';
import { CartListComponent } from '../components/cart-list/cart-list';
import { CartPage } from '../pages/cart/cart';
import { BrandListComponent } from '../components/brand-list/brand-list';
import { BrandPage } from '../pages/brand/brand';
import { ProductShowPage } from '../pages/product-show/product-show';
import { ProductShowComponent } from '../components/product-show/product-show';
import { cartReducer }  from '../reducers/cart';
import { productsReducer } from '../reducers/products';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ShopEffects} from '../effects/shop';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MainPage,
    BeautyfeedPage,
    ProductDetailPage,
    BeautyfeedDetailPage,
    CartPage,
    ProductItemComponent,
    CartListComponent,
    CartButtonComponent,
    BrandPage,
    BrandListComponent,
    ProductShowPage,
    ProductShowComponent,
    ProductSlideComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
    }),
    IonicStorageModule.forRoot(),
    StoreModule.provideStore({
        cart: cartReducer,
        products: productsReducer,
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(ShopEffects)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BeautyfeedPage,
    MainPage,
    ProductDetailPage,
    BeautyfeedDetailPage,
    CartPage,
    BrandPage,
    ProductShowPage
  ],
  providers: [
    ProductService,
    PostService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
