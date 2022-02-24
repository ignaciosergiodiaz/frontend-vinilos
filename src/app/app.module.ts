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


@NgModule({
  declarations: [
    AppComponent,
    UsereditComponent,
    ArtistComponent,
    SongComponent,
    AlbumComponent
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
 