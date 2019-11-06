import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import {Movie} from '../movie';
//import'rxjs/add/operator/find'
@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent implements OnInit {
id:string;
movie:Movie;
  constructor(private route:ActivatedRoute,
    private movService:MovieService,
    private router:Router) { }

  ngOnInit():void {
    this.id=this.route.snapshot.params['code'];
    this.movie=this.movService.getMovies().find(c => c.code == this.id);
  }

}
