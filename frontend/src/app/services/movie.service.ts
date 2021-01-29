import { Injectable } from '@angular/core';
import {Movie} from "../models/movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  selectedMovie: Movie;
  movies: Movie[];
  URL_API = 'http://localhost:3000/api/movies';
  constructor(private http: HttpClient) {
    this.selectedMovie = new Movie();
  }

  getMovies(){
    return this.http.get(this.URL_API);
  }
  postMovie(movie: Movie) {
    return this.http.post(this.URL_API,movie);
  }
  putMovie(movie: Movie) {
    return this.http.put(this.URL_API + `/${movie._id}`, movie);
  }
  deleteMovie(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
