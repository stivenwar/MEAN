import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {NgForm} from "@angular/forms";
import {Movie} from "../../models/movie";

declare var M: any;

class Employee {
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  myCountry: string;
  myGenre: string;
  myWriter: string;
  myActor: string;
  private employeeService: any;

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  addCountry() {
    if (this.movieService.selectedMovie.countries[0] === '') {
      this.movieService.selectedMovie.countries[0]= this.myCountry;
    }else {
      this.movieService.selectedMovie.countries.push(this.myCountry);
      this.myCountry = '';
    }
  }
  addGenre() {
    if (this.movieService.selectedMovie.genres[0] === '') {
      this.movieService.selectedMovie.genres[0] = this.myGenre;
    }else {
      this.movieService.selectedMovie.genres.push(this.myGenre);
      this.myGenre = '';
    }
  }
  addWriter() {
    if (this.movieService.selectedMovie.writers[0] === '') {
      this.movieService.selectedMovie.writers[0] = this.myWriter;
    }else {
      this.movieService.selectedMovie.writers.push(this.myWriter);
      this.myWriter = '';
    }
  }
  addActor() {
    if (this.movieService.selectedMovie.actors[0] === '') {
      this.movieService.selectedMovie.actors[0] = this.myActor;
    }else {
      this.movieService.selectedMovie.actors.push(this.myActor);
      this.myActor = '';
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.movieService.selectedMovie = new Movie();
    }
  }
  addMovie(peli: Movie, form: NgForm) {
    if (peli._id) {
      this.movieService.putMovie(peli)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Updated Successfully'}); // LLamada desde Toast de Materialize
          this.getMovies(); // Para actualizar la lista de películas después de añadir
        })
    } else {
      console.log('Mi peli', peli)
      this.movieService.postMovie(peli)
        .subscribe(res => {
          console.log(res);
          M.toast({html: 'Save Successfully'}); // LLamada desde Toast de Materialize
          // Para actualizar la lista de películas después de añadir
        }); //escuchamos la respuesta del servidor y la utilizamos
    }
  }
  getMovies() {
    this.movieService.getMovies()
      .subscribe(res => {
        this.movieService.movies = res as Movie[];
        console.log(res);
      });
  }
  deleteMovie(_id: string) {
    if(confirm('Seguro de borrar')) {
      this.movieService.deleteMovie(_id)
        .subscribe(res => {
          this.getMovies();
          M.toast({html: 'Deleted OK'});
        });
    }}
  editMovie(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }
}
