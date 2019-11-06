import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  constructor(private movSer:MovieService,
  private route:ActivatedRoute,
  private router:Router) { }

  ngOnInit() {
    this.getMovies();
  }
model=new Movie ;
id = this.route.snapshot.params['id'];

getMovies(){
  this.movSer.getMovies()
  .subscribe(model=>
    this.model=model)
}
updateMovie(){
  this.movSer.updateMovie(this.id,this.model).subscribe()
console.log('Movie is updated');
}
}
