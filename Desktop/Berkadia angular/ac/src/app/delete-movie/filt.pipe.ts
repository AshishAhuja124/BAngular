import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filt'
})
export class FiltPipe implements PipeTransform {

  transform(Movies: any, search: any): any {
    if(search===undefined) return Movies;
    return Movies.filter(function(mov){
      return mov.moviename.toLowerCase().indexOf(search.toLowerCase())>-1;
      
    })
  }

}
