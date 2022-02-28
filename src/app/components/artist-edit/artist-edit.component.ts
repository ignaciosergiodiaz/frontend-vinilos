import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Artist } from 'src/app/models/artist';
import { ArtistsService } from 'src/app/services/artists.services';
import { GLOBAL } from 'src/app/services/global';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss'],
  providers: [UserService, ArtistsService, UploadService]
})
export class ArtistEditComponent implements OnInit {

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
    this.getArtist();
  }


  getArtist(){
    this._route.params.forEach((params:Params)=>{

      let id = params['id'];

      this._artistService.getArtist(this.token, id).subscribe(
        response => {
          if(!response.artist){
              this._router.navigate(['/']);
          }else{
            this.artist = response.artist
          }
        },
        error => {
          console.log(error)
        }
      )

    })
  }

  public filesToUpload: Array<File> = []  ;

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  onSubmit():void{
    console.log(this.artist)

    this._route.params.forEach((params:Params)=>{

      let id = params['id'];

      this._artistService.editArtist(this.token, id, this.artist).subscribe(
        response => {
          if (!response.artist){
            console.log('error en el servidor')
          }else{
            this.alertMessage = "¡El artista se ha editado  correctamente!";
            // this.artist = response.artist ;

            this._uploadService.makeFileRequest(this.url+'upload-image-artist/'+id, [], this.filesToUpload, this.token, 'image' )

              .then(

                  (result)=>{
                    console.log(result)
                  },
                  (error)=>{
                    console.log(error)
                  }

              )

            // this.router.navigate([''])
          }
        },
        error => {
          console.log(error)
        }
      )

    });
  }
}
