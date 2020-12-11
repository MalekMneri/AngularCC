import { OrderComponent } from './order/order.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: '**', redirectTo: 'home' ,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
