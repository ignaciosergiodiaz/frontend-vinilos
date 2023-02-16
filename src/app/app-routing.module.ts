import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ArtistAddComponent } from './components/artist-add/artist-add.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistEditComponent } from './components/artist-edit/artist-edit.component';
import { ArtistGetComponent } from './components/artist-get/artist-get.component';
import { HomeComponent } from './components/home/home.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artist-add', component: ArtistAddComponent },
  {path: 'artist-list', component: ArtistListComponent},
  {path: 'mis-datos', component: UsereditComponent},
  {path: 'editar-artista/:id', component:ArtistEditComponent},
  {path: 'artista/:id', component:ArtistGetComponent},
  {path: 'artists/:page', component:ArtistListComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
