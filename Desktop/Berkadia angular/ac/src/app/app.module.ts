import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { MovieService } from './movie.service';
import{FormsModule} from'@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule,RouterLink} from '@angular/router';
import { FiltPipe } from './delete-movie/filt.pipe';
import { HighlightDirective } from './delete-movie/highlight.directive';
import { GuardComponent } from './guard/guard.component';
import { GuardService } from './guard/guard.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateMovieComponent } from './update-movie/update-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    FiltPipe,
    HighlightDirective,
    GuardComponent,
    UpdateMovieComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'/Home', pathMatch:'full' },
      {path:'Home',component:DeleteMovieComponent},
      {path:'add',component:AddMovieComponent},
      {path:'update/:id', component:UpdateMovieComponent},
      
      {path:'guard/:code',
      canActivate:[GuardService], 
      component:GuardComponent},
      
    ])
  ],
  providers: [MovieService,GuardService],
  bootstrap: [AppComponent]

}
export class AppModule { }
