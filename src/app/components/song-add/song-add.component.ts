import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { Song } from 'src/app/models/song';

import { AlbumService } from 'src/app/services/album.service';
import { GLOBAL } from 'src/app/services/global';
import { SongService } from 'src/app/services/song.service';
import { UserService } from 'src/app/services/user.services';


@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
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

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _albumService: AlbumService,
    private _SongService: SongService
  ) {
    this.titulo = 'Crear nuevo album';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url ;
    this.song = new Song(0,'','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
