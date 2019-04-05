import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WishlistcounterComponent } from './components/wishlistcounter/wishlistcounter.component';
import { CartcounterComponent } from './components/cartcounter/cartcounter.component';
import { SingleproductComponent } from './components/singleproduct/singleproduct.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BodyComponent } from './components/body/body.component';
import { UsernameComponent } from './components/username/username.component';
import { UsernameandlogoutComponent } from './components/usernameandlogout/usernameandlogout.component';
import { RegisterformComponent } from './components/registerform/registerform.component';
import { LoginformComponent } from './components/loginform/loginform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    WishlistcounterComponent,
    CartcounterComponent,
    SingleproductComponent,
    NotFoundComponent,
    BodyComponent,
    UsernameComponent,
    UsernameandlogoutComponent,
    RegisterformComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
