import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';

import { map } from "rxjs/operators";
import { GLOBAL } from './global';
import { Song } from "../models/song";

import { Observable } from "rxjs";

@Injectable()

export class SongService{

  public url: any ;
  public token:any ;

  constructor(private http: HttpClient){
      this.url = GLOBAL.url ;
  }

  ngOnIinit(){
    console.log('servicio de album cargado')
  }

  editSong(token:any, id:string, song:Song){

    let params = JSON.stringify(song);

    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${this.getToken()}`
    })

    return this.http.put(this.url+'song/'+id, params, {headers: headers})
    .pipe(map((res:any) => res ));

  }

  deleteSong(token:any,id:string){

    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${this.getToken()}`
    })

      return this.http.delete(this.url+'song/'+id,{headers: headers})
              .pipe(map((res:any) => res ));


  }

  getSong(token:any,id:string){
      let headers = new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': `${this.getToken()}`
      })

      return this.http.get(this.url+'song/'+id,{headers: headers})
          .pipe(map((res:any) => res ));

  }

  getSongs(token:any, albumId = null){

    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${this.getToken()}`
    })

    if(albumId == null){

      return this.http.get(this.url+'songs',{headers: headers})
              .pipe(map((res:any) => res ));
    }else{

      return this.http.get(this.url+'songs/'+albumId, {headers:headers})
      .pipe(map((res:any) => res ));
    }

  }


  addSong(token:any, song: Song){

    let params = JSON.stringify(song);
    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${this.getToken()}`
    })

    return this.http.post(this.url+'song', params, {headers: headers})
      .pipe(map((res:any) => res ));
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
