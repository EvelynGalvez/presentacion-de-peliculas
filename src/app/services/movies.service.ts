import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private apiKey: string =  '&apikey=f622a8f2';

  getMovieByTitle(title: string) {
    const url = 'http://www.omdbapi.com/?s='+ title +this.apiKey;
    return this.http.get(url)
    .pipe(map( res => res.json()))
  }

  constructor(private http: Http ) { }

}
