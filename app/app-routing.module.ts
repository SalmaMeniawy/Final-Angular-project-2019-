import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './components/body/body.component';
import {CartCounterDetailsComponent} from './components/cart-counter-details/cart-counter-details.component';
import {WishListCounterDetailsComponent} from './components/wish-list-counter-details/wish-list-counter-details.component';
import {SingleproductComponent} from './components/singleproduct/singleproduct.component';
import {RegisterformComponent} from './components/registerform/registerform.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'home' ,component:BodyComponent},
{path:'cartlist' , component:CartCounterDetailsComponent},
{path:'wishlist' , component:WishListCounterDetailsComponent},
{path:'productitem' , component:SingleproductComponent},
{path: 'registerForm',component:RegisterformComponent},
{path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
