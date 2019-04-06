import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './components/body/body.component';
import {CartCounterDetailsComponent} from './components/cart-counter-details/cart-counter-details.component';
import {WishListCounterDetailsComponent} from './components/wish-list-counter-details/wish-list-counter-details.component';
const routes: Routes = [
{path:'home' ,component:BodyComponent},
{path:'cartlist' , component:CartCounterDetailsComponent},
{path:'wishlist' , component:WishListCounterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
