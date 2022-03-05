import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Artist } from 'src/app/models/artist';
import { ArtistsService } from 'src/app/services/artists.services';
import { GLOBAL } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.services';
@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.scss'],
  providers: [UserService, ArtistsService]

})
export class AlbumEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
