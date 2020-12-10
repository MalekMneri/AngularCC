import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShirtComponent } from './shop/shirt/shirt.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { OrderComponent } from './shop/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShirtComponent,
    HomeComponent,
    ShopComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
