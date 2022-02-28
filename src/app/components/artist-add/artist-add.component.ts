import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Artist } from 'src/app/models/artist';
import { ArtistsService } from 'src/app/services/artists.services';
import { GLOBAL } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-add.component.html',
  styleUrls: ['./artist-add.component.scss'],
  providers: [UserService, ArtistsService]
})
export class ArtistAddComponent implements OnInit {

  titulo: string = "" ;
  artist: Artist ;
  identity: any;
  token: any;
  url : string = "";
  alertMessage : string ="" ;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _userService: UserService,
    private _artistService: ArtistsService
  ) {
    this.titulo = 'Agregar Artista';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url ;
    this.artist = new Artist('','','');

  }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log(this.artist)
    this._artistService.addArtist(this.token, this.artist).subscribe(
      response => {
        if (!response.artist){
          console.log('error en el servidor')
        }else{
          this.alertMessage = "¡El artista se ha creado, correctamente!";
          this.artist = response.artist ;

          // this.router.navigate([''])
        }
      },
      error => {
        console.log(error)
      }
    )
  }



}
