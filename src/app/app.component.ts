import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { User } from './models/user';
import { GLOBAL } from './services/global';

import { UserService } from './services/user.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './views/app.component.html',
  providers: [UserService],
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {

  public title = 'Vinilo+' ;
  public user: User ;
  public userRegister: User ;
  public identity:any;
  public token: any ;
  public errorMessage : any ;
  public gethash: any ;
  public alertRegister : any ;
  public url : any;

  constructor(
    public _userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ){
    this.user = new User('', '', '', '','', 'ROLE_USER', '');
    this.userRegister = new User('', '', '', '','', 'ROLE_USER', '');
    this.url = GLOBAL.url ;
  }

  ngOnInit(): void {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }


  onSubmitRegister(){
    this._userService.register(this.userRegister).subscribe(
      response => {
        let user = response.user;
        this.userRegister = user ;

        if(!user._id){
           this.alertRegister =  "Error al registrarse" ;
        }else{
          this.alertRegister = " El registro se ha realizado correctamente, identificate con " + this.userRegister.email ;
          this.userRegister = new User('', '', '', '','', 'ROLE_USER', '');
        }
      },
      error => {
        console.log(error);
      });
  }

  public logoOut(){

    localStorage.removeItem("identity");
    localStorage.removeItem("token");
    localStorage.clear();

    this.identity = null ;
    this.token = null ;

    this.router.navigate(['/'])

  }

  public onSubmit(){

    this._userService.signup(this.user).subscribe(
      response => {
          let identity = response.user ;
          this.identity = identity ;

          if ( !this.identity._id ) {
            alert('El usuario no esta correctamente identificado')
          }else{

            localStorage.setItem('identity', JSON.stringify(identity));

            this._userService.signup(this.user, true).subscribe(

              response => {
                  var token = response.token ;
                  this.token = token ;

                  if ( this.token.length <= 0) {
                    alert('El usuario no esta correctamente identificado')
                  }else{
                    localStorage.setItem("token", token);
                  }
              },

              error => {

                var errorMessage = <any>error ;

                if(errorMessage != null){
                var parsedError = error.error.message ;
                console.log(parsedError);
                this.errorMessage = parsedError ;
                }

              }

            )

          }
      },
      error => {
        var errorMessage = <any>error ;

        if(errorMessage != null){
            var parsedError = error.error.message ;
            console.log(parsedError);
            this.errorMessage = parsedError ;
        }
      }
    );

  }
};
