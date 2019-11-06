import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
alertMe(val){
  alert(val)
}  
constructor(private movieService:MovieService) { }
model=new Movie;
addMovie(){
  this.movieService.addMovie(this.model)
  .subscribe()
  console.log('movie is submitted');
}
  ngOnInit() {
  }

}
