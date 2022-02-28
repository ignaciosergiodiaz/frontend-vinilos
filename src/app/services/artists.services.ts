import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';

import { map } from "rxjs/operators";
import { GLOBAL } from './global';
import { Artist } from "../models/artist";

@Injectable()

export class ArtistsService{

  public url: any ;
  public token:any ;

  constructor(private http: HttpClient){
      this.url = GLOBAL.url ;
  }

  ngOnIinit(){
    console.log('servicio de artista cargado')
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

  getArtists(token:any, page:any, artists:any){

    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `${this.getToken()}`
    });

    return this.http.get<Artist>(this.url+'artists/'+page, {headers:headers} )
        .pipe(map(res => res));

  }

  getArtist(token:any, id:any){

    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `${this.getToken()}`
    });

    return this.http.get<Artist>(this.url+'artist/'+id, {headers:headers})
      .pipe(map(res => res));

  }

  addArtist(token:any, artist: Artist){

    let params = JSON.stringify(artist);
    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${this.getToken()}`
    })

    return this.http.post(this.url+'artist', params, {headers: headers})
      .pipe(map((res:any) => res ));
  }

  editArtist(token:any ,  id: string, artist:Artist){

    let params = JSON.stringify(artist);
    let headers = new HttpHeaders({
      'Content-Type': 'Application/json',
      'Authorization': `${this.getToken()}`
    })

    return this.http.put<Artist>(this.url+'artist/'+id, params, {headers: headers})
      .pipe(map((res:any) => res ));
  }


  deleteArtist(token:any, id:string){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json',
        'Authorization': `${this.getToken()}`
      })
    }

    return this.http.get(this.url+'artist/'+id,  httpOptions )
            .pipe(map(res => res));

  }

}
