import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // HTTP requests
import { HttpService } from './http.service'; // HTTP Service Module
import { FormsModule } from '@angular/forms'; // Use Form Data

import { AppComponent } from './app.component';
import { CakesComponent } from './cakes/cakes.component';
import { NewCakeComponent } from './new-cake/new-cake.component';
import { NewRatingComponent } from './new-rating/new-rating.component';
import { CakeComponent } from './cake/cake.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CakesComponent,
    NewCakeComponent,
    NewRatingComponent,
    CakeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
