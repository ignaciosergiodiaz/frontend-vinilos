import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Artist } from 'src/app/models/artist';
import { ArtistsService } from 'src/app/services/artists.services';
import { GLOBAL } from 'src/app/services/global';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.services';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './../../views/artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  titulo: string = "" ;
  artist: any ;
  identity: any;
  token: any;
  url : string = "";
  alertMessage : string ="" ;
  is_edit = true ;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _artistService: ArtistsService,
    private _uploadService: UploadService
  ) {
    this.titulo = 'Editar Artista';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url ;
    this.artist = new Artist('','','');

  }

  ngOnInit(): void {
  }

}
