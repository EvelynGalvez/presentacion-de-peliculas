import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MatInputModule } from '@angular/material/input';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title: string;
  movies: any[];
  details: object;

  /* Esta funciín debe recibir como parámetro lo que en html aparece como {{movie.Title}}*/
  getDetails(title:string) {
    console.log(this.getDetails);
    this.moviesService.getDetailsById(title).subscribe(
      (data: any) => {
        this.details = data;
        console.log(this.details);
      }
    )
  }

  getMovie(title: string) {
    console.log(this.getMovie);
    this.moviesService.getMovieByTitle(title).subscribe(
      (data: any) => {
        this.movies = data.Search;
        //console.log(this.movies[0].Title);
        this.movies.forEach(function(element){
          console.log(element.Title)  // <-- Esto debe ser pasado como parámetro a función getDetails
          return element.Title
        })
      })
  }

  constructor(private moviesService: MoviesService){
  }

  ngOnInit() {
  }

}
