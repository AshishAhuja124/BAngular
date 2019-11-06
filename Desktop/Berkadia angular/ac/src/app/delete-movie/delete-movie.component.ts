import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
alertMe(val){
  alert(val);
}
  constructor(private movSer:MovieService) { }
  ngOnInit() {
    this.getMovies()
  }
model:Movie
getMovies(){
  this.movSer.getMovies().subscribe(model=>{this.model=model})
  console.log('Movie  is Deleted');
}

deleteMovie(id){
this.movSer.deleteMovie(id).subscribe(()=>
this.getMovies());


}
}
