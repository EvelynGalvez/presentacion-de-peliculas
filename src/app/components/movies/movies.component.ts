import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title: string;
  movies: any[];
  details: any[];
  idMovie: any[];

  getMovie(title: string) {
    console.log(this.getMovie);
    this.moviesService.getMovieByTitle(title).subscribe(
      (data: any) => {
        this.movies = data.Search;
        console.log(this.movies);
      })
  }

  constructor(private moviesService: MoviesService){
  }

  /*info(id: string) {
    this.details = data.Search.imdbID;
    this.moviesService.getDetailsById(id).subscribe(
      (data:any) => {
        console.log(this.details);
      }
    )
  }*/

  ngOnInit() {
  }

}
