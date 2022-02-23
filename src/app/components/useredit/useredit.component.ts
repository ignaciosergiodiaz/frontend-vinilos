import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.services';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss'],
  providers:[UserService]
})

export class UsereditComponent implements OnInit {

  titulo : string ;
  user: any ;
  userRegister: any ;
  identity:any;
  token: any ;
  errorMessage : any ;
  gethash: any ;
  alertRegister : any ;
  alertMessage: any;
  url : any =  GLOBAL.url;

  constructor(
      private _userService: UserService
    ) {
      this.titulo = "Actualizar mis datos ";
      this.identity = this._userService.getIdentity();
      this.user = this.identity;
      //localStorage
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();
  }

  ngOnInit(): void {
  }

  public filesToUpload: Array<File> = []  ;

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>){

    var token = this._userService.getToken();

    return new Promise(function(resolve, reject){

      var formData : any = new FormData();
      var xhr = new XMLHttpRequest();

      for(var i = 0 ; i < files.length; i++){
        formData.append('image', files[i], files[i].name);
      }

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);
      xhr.onreadystatechange = function(){

      if (xhr.readyState == 4) {

          if (xhr.status == 200) {

              resolve(JSON.parse(xhr.response));
          }else{
            resolve(xhr.response);

          }

        }
      }});

  }

  onSubmit(){

    this._userService.updateUser(this.user).subscribe(

      response => {
        if(!response.user){
          this.alertMessage = "El usuario no se ha actualizado";
        }else{
          localStorage.setItem("identity", JSON.stringify(this.user));
          document.getElementById("identity_name")!.innerHTML = this.user.name ;

            if(!this.filesToUpload){
              // Redirección
            }else{
              this.makeFileRequest(this.url+'upload-image-user/'+this.user._id, [], this.filesToUpload )
                .then((result: any)=>{
                  this.user.image = result.image ;
                  localStorage.setItem('identity', JSON.stringify(this.user));

                  console.log(this.user);
                  this.errorMessage = 'El usuario y la imagen se han actualizado corréctamente';
                  this.errorMessage = null;

                });
            }

            this.alertMessage = "Datos Actualizados correctamente"

        }
      }

    )

  }

}
