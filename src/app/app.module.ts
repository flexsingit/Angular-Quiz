import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routes/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


/* Material Design components for Angular
  https://material.angular.io/
*/
import { MatToolbarModule } from '@angular/material/toolbar';
import { DeleteComponent } from './components/home/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent, DeleteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
  ],
  providers: [],
  entryComponents: [ DeleteComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
