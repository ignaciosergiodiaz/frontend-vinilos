import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Album } from 'src/app/models/album';

import { Artist } from 'src/app/models/artist';

import { AlbumService } from 'src/app/services/album.service';
import { ArtistsService } from 'src/app/services/artists.services';
import { GLOBAL } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.services';


@Component({
  selector: 'app-get-artist',
  templateUrl: './artist-get.component.html',
  styleUrls: ['./artist-get.component.scss'],
  providers: [UserService, ArtistsService, AlbumService]
})
export class ArtistGetComponent implements OnInit {

  titulo: string = "" ;
  artist?: any;
  albums: any ;
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
    this.getArtist();
  }


  onDeleteConfirm(id:any){
    this.confirmado = id ;
  }

  onCancelAlbum(){
      this.confirmado = null ;
  }

  onDeleteAlbum(id:any){
    this._albumService.deleteAlbum(this.token, id).subscribe(

        response => {
          console.log(response.album)

          if(!response.album){
            alert('No se ha borrado el album')
          }else{
            this.alertMessage = "¡El album se ha borrado de forma correcta !";
            console.log('Album eliminado')
          }

        },

        error => {

          var errorMessage = <any>error ;

          if(errorMessage != null ) {

            var body = JSON.parse(error._body);
            console.log(error);

          }

        }

    )
}


  getArtist(){

    this._route.params.forEach((params:Params)=>{

      let id = params['id'];

      this._artistService.getArtist(this.token, id).subscribe(

        response => {

          if(!response.artist){

            this._router.navigate(['/']);

          }else{

            this.artist = response.artist;
            console.log(response.artist)

            //Sacar los albums del artista

            this._albumService.getAlbums(this.token, response.artist._id).subscribe(

                response => {

                  this.albums = response.albums;

                  if (!response.albums){
                      this.alertMessage = "Este artista no tiene albums";
                  }else{
                    this.albums = response.albums;
                    console.log(this.albums)
                  }

                },

                error => {

                  var errorMessage = <any>error ;

                  if(errorMessage != null ) {

                    // var body = JSON.parse(error._body);
                    console.log(error);

                  }


                }

            )}

        },
        error => {
          console.log(error)
        }
      )

    })
  }

}
