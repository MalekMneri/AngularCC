import { OrderEditComponent } from './orders/order-edit/order-edit.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'orderEdit/:id', component: OrderEditComponent},
  {path: 'myOrders', component: OrdersComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: '**', redirectTo: 'home' ,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
