import { Injectable } from '@angular/core';
import { Http, JsonpModule } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  movies:any[] = [];
  titles: any[] = [];
  private apiKey: string =  '&apikey=f622a8f2';

  getDetailsById(title: string) {
    const url = 'http://www.omdbapi.com/?t='+ title +this.apiKey;
    return this.http.get(url)
    .pipe(map(res => {
      this.titles = res.json();
      return res.json();
    }));
  }


  constructor(private http: Http ) { }

  getMovieByTitle(title: string) {
    const url = 'http://www.omdbapi.com/?s='+ title +this.apiKey;
    return this.http.get(url)
      .pipe(map(res => {
        this.movies = res.json();
        return res.json();
      }));  
    }

}

