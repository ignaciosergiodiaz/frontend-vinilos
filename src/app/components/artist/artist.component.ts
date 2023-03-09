import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Artist } from 'src/app/models/artist';
import { GLOBAL } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-artist',
  templateUrl: './../../views/artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [UserService]
})
export class ArtistComponent implements OnInit {

  titulo: string = "" ;
  identity: any;
  token: any;
  url : string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.titulo = 'Artistas';
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.url = GLOBAL.url ;
   }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
