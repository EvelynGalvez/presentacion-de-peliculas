import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(public _ms: MoviesService){

    this._ms.getMovies()
      .subscribe( data => console.log(data))
  }

  ngOnInit() {
  }

}
