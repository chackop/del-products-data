import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsServiceService } from './services/products-service.service';
import { DiscountServiceService } from './services/discount-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatExpansionModule
  ],
  providers: [ProductsServiceService, DiscountServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
