import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ArtistAddComponent } from './components/artist-add/artist-add.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistEditComponent } from './components/artist-edit/artist-edit.component';
import { ArtistGetComponent } from './components/artist-get/artist-get.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';

import { HomeComponent } from './components/home/home.component';
import { UsereditComponent } from './components/useredit/useredit.component';

import { AlbumAddComponent } from './components/album-add/album-add.component';
import { AlbumEditComponent } from './components/album-edit/album-edit.component';
import { AlbumGetComponent } from './components/album-get/album-get.component';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'crear-album/:artist', component: AlbumAddComponent},
  {path: 'editar-album/:id', component: AlbumEditComponent},
  {path: 'detalle-album/:id', component:AlbumGetComponent},
  {path: 'artist-list', component: ArtistListComponent},
  {path: 'mis-datos', component: UsereditComponent},

  
  {path: 'artist-add', component: ArtistAddComponent },
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
