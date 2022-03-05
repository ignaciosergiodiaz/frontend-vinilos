import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Artist } from 'src/app/models/artist';
import { ArtistsService } from 'src/app/services/artists.services';
import { GLOBAL } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html',
  styleUrls: ['./album-add.component.scss'],
  providers: [UserService, ArtistsService]

})
export class AlbumAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
