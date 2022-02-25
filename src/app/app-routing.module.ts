import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { UsereditComponent } from './components/useredit/useredit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mis-datos', component: UsereditComponent},
  {path: 'artists/:page', component:ArtistComponent},
  {path: '**', component: UsereditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
