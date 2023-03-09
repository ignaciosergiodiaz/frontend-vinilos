import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { Song } from 'src/app/models/song';

import { AlbumService } from 'src/app/services/album.service';
import { GLOBAL } from 'src/app/services/global';
import { SongService } from 'src/app/services/song.service';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-song-edit',
  templateUrl: './../../views/song-edit.component.html',
  styleUrls: ['./song-edit.component.scss'],
  providers: [UserService,AlbumService, SongService,UploadService]
})

export class SongEditComponent implements OnInit {

  titulo: string = "" ;
  song: Song ;
  identity: any;
  token: any;
  url : string = "";
  alertMessage : string ="" ;
  is_edit:boolean = true ;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _albumService: AlbumService,
    private _uploadService:UploadService,
    private _SongService: SongService
  ) {
    this.titulo = 'Editar canción de este album';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url ;
    this.song = new Song('',1,'','','','');
  }

  ngOnInit(): void {
    //Sacar la canción a editar
    this.getSong();
  }

  getSong(){
    this._route.params.forEach((params: Params ) => {

      let id = params['id'];

      this._SongService.getSong(this.token, id).subscribe(

        response => {
          if (!response.song){
            this._router.navigate(['/'])

          }else{
              this.song = response.song ;
          }
        },
        error => {
          console.log("El album no se ha podido editar")
        }

      )

    })

  }


  onSubmit(){

      this._route.params.forEach((params: Params)=>{

          let id = params['id'];

          this._SongService.editSong(this.token, id, this.song).subscribe(

            response => {

              if(!response.song){
                this.alertMessage = 'Error en el servidor';
              }else{

                this.alertMessage = '¡La canción se ha actualizamos correctamente!';

                this.song = response.song;
                console.log(response.song)

                if(!this.filesToUpload){
                  this._router.navigate(['/album', response.song.album]);

                }else{
                  this._uploadService.makeFileRequest(this.url+'upload-file-song/'+id, [], this.filesToUpload, this.token, 'file' )

                  .then(
                      (result)=>{

                        this._router.navigate(['/detalle-album', response.song.album]);
                      },
                      (error)=>{
                        console.log(error)
                      }
                  )

                }

              }

            },

            error => {
              var errorMessage = <any>error;

			        if(errorMessage != null){
			          var body = JSON.parse(error._body);
			          this.alertMessage = body.message;

			          console.log(error);
			        }

            }

          );
        });

  }

  public filesToUpload: Array<File> = []  ;

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }


}
