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
  result: object;
  
  getMovie(title: string) {
    console.log(this.getMovie);
    this.moviesService.getMovieByTitle(title)
    .subscribe( data => console.log(data))
  }

  constructor(private moviesService: MoviesService){

    /*this._ms.getMovies()
      .subscribe( data => console.log(data))*/
  }

  ngOnInit() {
  }

}
