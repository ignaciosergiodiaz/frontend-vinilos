import { Component, OnInit } from '@angular/core';

import { Song } from 'src/app/models/song';

import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public url: string = "";
  public song:any;

  constructor() {
    this.url = GLOBAL.url;
    this.song = new Song('',1,'','','','')

  }

  ngOnInit(): void {
    console.log("componente player cargado!!!!!")
  }

}
