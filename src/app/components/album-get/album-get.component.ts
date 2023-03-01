import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Album } from 'src/app/models/album';

import { Artist } from 'src/app/models/artist';

import { AlbumService } from 'src/app/services/album.service';
import { ArtistsService } from 'src/app/services/artists.services';
import { GLOBAL } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.services';


@Component({
  selector: 'app-album-get',
  templateUrl: './album-get.component.html',
  styleUrls: ['./album-get.component.scss'],
  providers: [UserService, ArtistsService, AlbumService]

})
export class AlbumGetComponent implements OnInit {

 titulo: string = "" ;
  artist?: any;
  album: any ;
  identity: any;
  token: any;
  url : string = "";
  alertMessage : string ="" ;
  confirmado : any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _artistService: ArtistsService,
    private _albumService: AlbumService
  ) {
    this.titulo = 'Artista';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url ;

  }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(){

    console.log("hola esta cargando la funcion getAlbum");

    this._route.params.forEach((params: Params) => {

      let id = params['id']

      this._albumService.getAlbum(this.token, id).subscribe(

        response => {
            if (!response.album){
              this.alertMessage = "no se ha podido obtener el detalle del album"
            }else{
              this.album = response.album
            }
        },

        error => {

          console.log(error)

        }

      )

    })

  }

}
