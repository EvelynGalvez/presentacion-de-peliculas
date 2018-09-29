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
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))
  }

  getDetailsById(title: string) {
    const url = 'http://www.omdbapi.com/?t='+ title +this.apiKey;
    return this.http.get(url).pipe(map(
      (response: Response) => {
        return response.json();
      }
    ))
  }

  constructor(private http: Http ) { }

}
