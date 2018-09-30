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
  buscar: string = '';
  title: string;
  movies: any[];
  details: object;
  titles: string = '';

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

  constructor(public moviesService: MoviesService){
  }

  ngOnInit() {
  }

/*  getMovie() {
    if (this.buscar.length == 0) {
      return;
    }
    this.moviesService.getMovieByTitle(this.buscar)
      .subscribe()
  }*/

  getMovie() {
    this.moviesService.getMovieByTitle(this.buscar)
    .subscribe(
      (data: any) => {
        this.movies = data.Search;
        for(let i = 0; i < 10; i++ ) {
          this.titles = this.movies[i].Title;
          console.log(this.titles);
          this.moviesService.getDetailsById(this.titles)
          .subscribe(
            (data: any) => {
              this.details = data;
              console.log(this.details);
            }
          )
        }
      })
  }

}
