import { Injectable } from '@angular/core';
import { ActivatedRoute,Route,CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()
export class GuardService {

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot):boolean{
  let id = +route.url[1].path;
  console.log(id);
  if (id<2){
    alert(" movie is not available");
   
    return false;
    
  }
  else{
    
    return true;
  }

   }

  }



