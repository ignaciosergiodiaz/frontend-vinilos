import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/album.service';
import { GLOBAL } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-album-add',
  templateUrl: './../../views/album-add.component.html',
  styleUrls: ['./album-add.component.scss'],
  providers: [UserService,AlbumService]
})

export class AlbumAddComponent implements OnInit {

  titulo: string = "" ;
  album: Album ;
  identity: any;
  token: any;
  url : string = "";
  alertMessage : string ="" ;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _albumService: AlbumService
  ) {
    this.titulo = 'Crear nuevo album';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url ;
    this.album = new Album('','',2015,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(){

    this._route.params.forEach((params: Params ) => {

      let arist_id = params['artist'];
      this.album.artist = arist_id ;

      this._albumService.addAlbum(this.token, this.album).subscribe(

        response => {
          if (!response.album){
            console.log('error en el servidor')
          }else{
            this.alertMessage = "¡El album se ha creado correctamente!";
            console.log("El album se ha agregado exitosamente");
            this.album = response.album ;
             this._router.navigate(['/editar-album', response.album._id]);
          }
        },
        error => {
          console.log(error);
        }
      )

    })

    console.log(this.album);

  }

}
