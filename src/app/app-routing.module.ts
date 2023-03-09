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
import { SongAddComponent } from './components/song-add/song-add.component';
import { SongEditComponent } from './components/song-edit/song-edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { SoporteComponent } from './components/soporte/soporte.component';

const routes: Routes = [

  {path: 'mis-datos', component: UsereditComponent},

  {path: 'listado-de-artistas', component: ArtistListComponent},
  {path: 'crear-artista', component: ArtistAddComponent },
  {path: 'editar-artista/:id', component:ArtistEditComponent},
  {path: 'artista/:id', component:ArtistGetComponent},
  {path: 'artists/:page', component:ArtistListComponent},

  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},

  {path: 'crear-album/:artist', component: AlbumAddComponent},
  {path: 'editar-album/:id', component: AlbumEditComponent},
  {path: 'detalle-album/:id', component:AlbumGetComponent},

  {path:'agregar-cancion/:album', component:SongAddComponent},
  {path:'editar-cancion/:id', component:SongEditComponent},
  {path:'faq', component:SoporteComponent},
  {path:'buscar', component:SearchComponent},
  {path:'home', component:HomeComponent},

  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
