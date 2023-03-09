import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { User } from './models/user';

import { HttpClientModule } from '@angular/common/http';
import { UsereditComponent } from './components/useredit/useredit.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SongComponent } from './components/song/song.component';

import { HomeComponent } from './components/home/home.component';

import { ArtistAddComponent } from './components/artist-add/artist-add.component';
import { ArtistEditComponent } from './components/artist-edit/artist-edit.component';
import { ArtistGetComponent } from './components/artist-get/artist-get.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';


import { AlbumEditComponent } from './components/album-edit/album-edit.component';
import { AlbumDeleteComponent } from './components/album-delete/album-delete.component';
import { AlbumAddComponent } from './components/album-add/album-add.component';
import { AlbumGetComponent } from './components/album-get/album-get.component';

import { SongAddComponent } from './components/song-add/song-add.component';
import { SongGetComponent } from './components/song-get/song-get.component';
import { SongEditComponent } from './components/song-edit/song-edit.component';
import { PlayerComponent } from './components/player/player.component';
import { IconsComponent } from './components/icons/icons.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SoporteComponent } from './components/soporte/soporte.component';

@NgModule({
  declarations: [
    AppComponent,
    UsereditComponent,
    ArtistComponent,
    SongComponent,
    HomeComponent,
    ArtistGetComponent,
    ArtistAddComponent,
    ArtistListComponent,
    ArtistEditComponent,
    ArtistDetailComponent,
    AlbumEditComponent,
    AlbumDeleteComponent,
    AlbumAddComponent,
    AlbumGetComponent,
    SongAddComponent,
    SongGetComponent,
    SongEditComponent,
    PlayerComponent,
    IconsComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    ContactoComponent,
    SoporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {




}
