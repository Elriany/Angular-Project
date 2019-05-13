import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { SubproductComponent } from './products/subproduct/subproduct.component';
//new
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import { from } from 'rxjs';
import { DetailsproductComponent } from './products/detailsproduct/detailsproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    SubproductComponent,
    DetailsproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //new
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
