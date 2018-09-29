import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Material
import { MatToolbarModule } from '@angular/material/toolbar'; //Toolbar
import { MatButtonModule } from '@angular/material/button'; //Botones y link
import { MoviesComponent } from './components/movies/movies.component'; 

import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
