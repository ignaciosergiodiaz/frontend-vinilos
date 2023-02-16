import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Artist } from 'src/app/models/artist';
import { ArtistsService } from 'src/app/services/artists.services';
import { GLOBAL } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-get-artist',
  templateUrl: './artist-get.component.html',
  styleUrls: ['./artist-get.component.scss'],
  providers: [UserService, ArtistsService]
})
export class ArtistGetComponent implements OnInit {

  titulo: string = "" ;
  artist: any;
  identity: any;
  token: any;
  url : string = "";
  alertMessage : string ="" ;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _artistService: ArtistsService
  ) {
    this.titulo = 'Artista';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url ;

  }

  ngOnInit(): void {
    this.getArtist();
  }

  getArtist(){
    this._route.params.forEach((params:Params)=>{

      let id = params['id'];

      this._artistService.getArtist(this.token, id).subscribe(
        response => {
          this.artist = response.artist;
          console.log(response.artist)
        },
        error => {
          console.log(error)
        }
      )

    })
  }

}
