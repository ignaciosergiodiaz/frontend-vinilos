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
import { AlbumComponent } from './components/album/album.component';
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
import { AlbumsGetComponent } from './components/albums-get/albums-get.component';
import { SongAddComponent } from './components/song-add/song-add.component';
import { SongGetComponent } from './components/song-get/song-get.component';

@NgModule({
  declarations: [
    AppComponent,
    UsereditComponent,
    ArtistComponent,
    SongComponent,
    AlbumComponent,
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
    AlbumsGetComponent,
    SongAddComponent,
    SongGetComponent
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
