import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { Song } from 'src/app/models/song';

import { AlbumService } from 'src/app/services/album.service';
import { GLOBAL } from 'src/app/services/global';
import { SongService } from 'src/app/services/song.service';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-song-add',
  templateUrl: './../../views/song-add.component.html',
  styleUrls: ['./song-add.component.scss'],
  providers: [UserService,AlbumService, SongService]
})

export class SongAddComponent implements OnInit {

  titulo: string = "" ;
  song: Song ;
  identity: any;
  token: any;
  url : string = "";
  alertMessage : string ="" ;
  is_edit:boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _albumService: AlbumService,
    private _SongService: SongService
  ) {
    this.titulo = 'agregar la info de este album';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url ;
    this.song = new Song('',1,'','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(){

    this._route.params.forEach((params: Params ) => {

      let album_id = params['album'];
      this.song.album = album_id ;

      this._SongService.addSong(this.token, this.song).subscribe(

        response => {
          if (!response.song){
            console.log('error en el servidor')
          }else{
            // this.alertMessage = "¡La canción se ha creado correctamente!";
            // console.log("La canción se ha agregado exitosamente");
            // this.song = response.song ;
            // console.log(response.song)
             this._router.navigate(['/editar-cancion', response.song._id]);
          }
        },
        error => {
          console.log(error);
        }
      )

    })

    console.log(this.song);

  }

}
