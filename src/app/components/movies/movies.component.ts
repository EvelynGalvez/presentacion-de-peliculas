import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MatInputModule } from '@angular/material/input';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from '@angular/core/src/render3/instructions';
import { Observable, ObjectUnsubscribedError } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

declare var $: any;
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
  poster: any;
  titulo: any;
  duracion: any;
  imdbID: any;
  id: any;
  reparto: any;
  nameDirector: any;
  genero: any;
  premios: any;
  type: any;
  portada: any;
 



  constructor(public moviesService: MoviesService, private router: Router, public route: ActivatedRoute){
  }

  ngOnInit() { 
    $(document).ready(function(){
      $("#flip").click(function(){
        alert("jQuery esta funcionando !!");
      });
  });
  }

  


  getMovie() {
    this.moviesService.getMovieByTitle(this.buscar)
    .subscribe(
      (data: any) => {
        this.movies = data.Search;
        let dataMovies = this.movies;
        return dataMovies;
      })
  }

  getTitles(dataMovies) {
    let JsdataMovies = JSON.stringify(dataMovies);
    let jpdataMovies = JSON.parse(JsdataMovies);
    for (let i = 0; i < 10; i++) {
      this.type = jpdataMovies[i].Type;
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
        this.poster = detailsArray[13];
        this.imdbID = detailsArray[18];
        this.id = this.imdbID[1];
        this.titulo = this.title[1];
        this.duracion = this.runtime[1];
        this.genero = this.gendre[1];
        this.nameDirector = this.director[1];
        this.reparto = this.actors[1];
        this.premios = this.awards[1];
        this.portada = this.poster[1];
      }
    )
  }
}
