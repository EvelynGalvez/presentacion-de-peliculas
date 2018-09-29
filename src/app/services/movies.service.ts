import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey: string =  '&apikey=f622a8f2';
  constructor(private jsonp: Jsonp,
              private http: Http ) { }

  getMovies() {
    let movie = 'up';
    let url = 'http://www.omdbapi.com/?t='+encodeURI(movie)+this.apiKey;
    return this.http.get(url)
      .pipe(map(res => res.json()))
  }
  
}
