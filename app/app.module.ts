import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CartcounterComponent } from './components/cartcounter/cartcounter.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { BodyComponent } from './components/body/body.component';
import { UsernameandlogoutComponent } from './components/usernameandlogout/usernameandlogout.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { NotFoundComponent} from './components/not-found/not-found.component';
import { CartCounterDetailsComponent } from './components/cart-counter-details/cart-counter-details.component';
import {WishListCounterDetailsComponent} from './components/wish-list-counter-details/wish-list-counter-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CartcounterComponent,
    SingleproductComponent,
    NotFoundComponent,
    BodyComponent,
    UsernameandlogoutComponent,
    RegisterformComponent,
    LoginformComponent,
    CartCounterDetailsComponent,
    WishListCounterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
