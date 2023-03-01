import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';

import { map } from "rxjs/operators";
import { GLOBAL } from './global';
import { Album } from "../models/album";

import { Observable } from "rxjs";

@Injectable()

export class AlbumService{

  public url: any ;
  public token:any ;

  constructor(private http: HttpClient){
      this.url = GLOBAL.url ;
  }

  ngOnIinit(){
    console.log('servicio de album cargado')
  }


  addAlbum(token:any, album: Album){

    let params = JSON.stringify(album);
    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${this.getToken()}`
    })

    return this.http.post(this.url+'album', params, {headers: headers})
      .pipe(map((res:any) => res ));
  }


  editAlbum(token:any, id:string, album: Album ){

    let params = JSON.stringify(album);
    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${this.getToken()}`
    })

    return this.http.put(this.url+'album/'+id, params, {headers: headers})
      .pipe(map((res:any) => res ));
  }

  getAlbum(token:any,id:string){

    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${this.getToken()}`
    })

      return this.http.get(this.url+'album/'+id,{headers: headers})
              .pipe(map((res:any) => res ));


  }

  deleteAlbum(token:any,id:string){

    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${this.getToken()}`
    })

      return this.http.delete(this.url+'album/'+id,{headers: headers})
              .pipe(map((res:any) => res ));


  }

  getAlbums(token:any, artistId = null){

    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${this.getToken()}`
    })

    if(artistId == null){

      return this.http.get(this.url+'albums',{headers: headers})
              .pipe(map((res:any) => res ));
    }else{

      return this.http.get(this.url+'albums/'+artistId, {headers:headers})
      .pipe(map((res:any) => res ));
    }

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

}
