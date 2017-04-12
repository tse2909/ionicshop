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
    BeautyfeedDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
    }),
    IonicStorageModule.forRoot()
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
    BeautyfeedDetailPage
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
