import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Material
import { MatToolbarModule } from '@angular/material/toolbar'; //Toolbar
import { MatButtonModule } from '@angular/material/button'; //Botones y link
import { MoviesComponent } from './components/movies/movies.component'; 

import { HttpModule, JsonpModule } from '@angular/http';

import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { MoviesService } from './services/movies.service';


const appRoutes: Routes = [
  {
    path: ' ',
    component: ToolbarComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/:texto',
    component: MoviesComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpModule,
    JsonpModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
