import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from "rxjs/operators";
import { GLOBAL } from './global';
import { User } from "../models/user";

@Injectable()
export class UserService{

    public url: any ;
    public ParasedIdentity: any ;
    public token:any ;
    public identity: any ;

    constructor(private http: HttpClient){
        this.url = GLOBAL.url ;
    }

    ngOnIinit(){
    }

    signup(user_to_login:any, gethash = false ){

        if(gethash != null){
            user_to_login.gethash = gethash ;
        }

        let json = JSON.stringify(user_to_login);
        let params = json ;

        let headers = new HttpHeaders({'Content-Type':'application/json'});

        return this.http.post<User>(this.url+'login', params, {headers: headers})
                .pipe(map((res:any) => res ));
    }

    getIdentity(){

       let identity = JSON.parse(localStorage.getItem('identity')!);

       if(identity != undefined){
         this.identity = identity ;
       }else{
         this.identity = null;
       }

       return this.identity ;

    }

    getToken(){

        let token = localStorage.getItem('token');

        if(token != "undefined"){
            this.token = token ;
        }else{
            this.token = null ;
        }

        return this.token ;

    }

    register(user_to_register:any){

        let json = JSON.stringify(user_to_register);
        let params = json ;

        let headers = new HttpHeaders({'Content-Type':'application/json'});

        return this.http.post<User>(this.url+'register', params, {headers: headers})
          .pipe(map((res:any) => res ));
    }

    updateUser(user_to_update:any){
        let params = JSON.stringify(user_to_update);

        let headers = new HttpHeaders({
            'Content-Type':'application/json',
            Authorization : `${this.getToken()}`
            });

        return this.http.put<User>(this.url+'update-user/' + user_to_update._id, params, {headers: headers})
                .pipe(map((res:any) => res ));
    }

}
