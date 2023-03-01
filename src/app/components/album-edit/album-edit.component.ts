import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Album } from 'src/app/models/album';

import { AlbumService } from 'src/app/services/album.service';
import { GLOBAL } from 'src/app/services/global';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.services';


@Component({
  selector: 'app-album-add',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.scss'],

providers: [UserService,AlbumService,UploadService ]
})

export class AlbumEditComponent implements OnInit {

  titulo: string = "" ;
  album: Album ;
  identity: any;
  token: any;
  url : string = "";
  alertMessage : string ="" ;
  is_edit: boolean ;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _albumService: AlbumService,
    private _uploadService: UploadService
  ) {
    this.titulo = 'Editar album';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url ;
    this.album = new Album('','',2015,'','');
    this.is_edit = true ;
  }

  ngOnInit(): void {
    this.getAlbum();
  }


  getAlbum(){
    this._route.params.forEach((params:Params)=>{

      let id = params['id'];

      this._albumService.getAlbum(this.token, id).subscribe(
        response => {
          if (!response.album){
            this._router.navigate(['/'])

          }else{
              this.album = response.album ;
          }
        },
        error => {
          console.log("El album no se ha podido editar")
        }
      )})
  }

  onSubmit(){

    this._route.params.forEach((params: Params ) => {

      let id = params['id'];

      this._albumService.editAlbum(this.token, id, this.album).subscribe(

        response => {
          if (!response.album){
            console.log('El artista fue subido exitosamente')
            this.alertMessage = "Hay un error en el servidor";
          }else{
            this.alertMessage = "¡El artista se ha creado, correctamente!";
              if(!this.filesToUpload ){
                console.log(this.album)
              }else{
                //Subir imagen del album
                this.album = response.album ;
                this._uploadService.makeFileRequest(this.url+'upload-image-album/'+id, [], this.filesToUpload, this.token, 'image' )
                  .then(
                    (result)=>{
                      this._router.navigate(['/artista', this.album.artist]);
                    },
                    (error)=>{
                      console.log(error)
                    }
                  );
              }
            }
          },

          error => {
            var errorMessage = <any>error ;

            if(errorMessage != null){
              // var body = JSON.parse(error._body);
              // this.alertMessage = body.message;
              console.log(error);
            }

          }
      );

    }) ;

  }

  public filesToUpload: Array<File> = []  ;

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
