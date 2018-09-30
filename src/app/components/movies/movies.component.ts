import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MatInputModule } from '@angular/material/input';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from '@angular/core/src/render3/instructions';
import { Observable, ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  buscar: string = '';
  title: any;
  movies: any[];
  details$:Observable<any>;
  titles: any[] = [];
  runtime: any;
  gendre: any[];
  director: any;
  actors: any;
  awards: any;



  constructor(public moviesService: MoviesService){
  }

  ngOnInit() {
  }

  getMovie() {
    this.moviesService.getMovieByTitle(this.buscar)
    .subscribe(
      (data: any) => {
        this.movies = data.Search;
        let dataMovies = this.movies;
        console.log(dataMovies);
        //this.getTitles(dataMovies);
        return dataMovies;
      })
  }

  getTitles(dataMovies) {
    let JsdataMovies = JSON.stringify(dataMovies);
    let jpdataMovies = JSON.parse(JsdataMovies);
    for (let i = 0; i < 10; i++) {
      this.titles = jpdataMovies[i].Title;
      let dataTitles = this.titles;
      this.getDetails(dataTitles);
    }
  }

  getDetails(dataTitles){
    this.moviesService.getDetailsById(dataTitles)
    .subscribe(
      (data: any) => {
        this.details$ = data;
        let detailsArray = Object.entries(this.details$);
        this.title = detailsArray[0];
        this.runtime = detailsArray[4];
        this.gendre = detailsArray[5];
        this.director = detailsArray[6];
        this.actors = detailsArray[8];
        this.awards = detailsArray[12];
        console.log('Titulo: ' + this.title[1]);
        console.log('Duración: ' + this.runtime[1]);
        console.log('Género: ' + this.gendre[1]);
        console.log('Director: ' + this.director[1]);
        console.log('Reparto: ' + this.actors[1]);
        console.log('Premios: ' + this.awards[1]);
      }
    )
  }
}
