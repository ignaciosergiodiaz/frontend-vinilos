import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Album } from 'src/app/models/album';

import { Song } from 'src/app/models/song';

import { AlbumService } from 'src/app/services/album.service';

import { GLOBAL } from 'src/app/services/global';
import { SongService } from 'src/app/services/song.service';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-album-get',
  templateUrl: './../../views/album-get.component.html',
  styleUrls: ['./album-get.component.scss'],
  providers: [UserService,AlbumService,SongService]

})

export class AlbumGetComponent implements OnInit {

  titulo: string = "" ;
  artist?: any;
  songs?: Song[];
  song:any;
  album?: any  ;
  _id?:any
  identity: any;
  token: any;
  url : string = "";
  alertMessage : string ="" ;
  confirmado : any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _albumService: AlbumService,
    private _songService: SongService
  ) {
    this.titulo = 'Artista';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url ;
  }

  ngOnInit(): void {
    this.getAlbum();
  }

	onDeleteConfirm(id:any){
		this.confirmado = id;
	}

	onCancelSong(){
		this.confirmado = null;
	}

	onDeleteSong(id:any){
		this._songService.deleteSong(this.token, id).subscribe(
			response => {
				this.getAlbum();
        response.song;
			},
			error => {
				var errorMessage = <any>error;

		        if(errorMessage != null){
		          var body = JSON.parse(error._body);
		          //this.alertMessage = body.message;

		          console.log(error);
		        }
			}
		);
	}

  startPlayer(song:any){

		let song_player = JSON.stringify(song);
		let file_path = this.url + 'get-song-file/' + song.file;
		let image_path = this.url + 'get-image-album/' + song.album.image;

		localStorage.setItem('sound_song', song_player);

		document.getElementById("mp3-source")!.setAttribute("src", file_path);
		(document.getElementById("player") as any).load();
		(document.getElementById("player") as any).play();

		document.getElementById('play-song-title')!.innerHTML = song.name;
		document.getElementById('play-song-artist')!.innerHTML = song.album.artist.name;
		document.getElementById('play-image-album')!.setAttribute('src', image_path);

  }

  getAlbum(){

		this._route.params.forEach((params: Params) => {

      let id = params['id'];

			this._albumService.getAlbum(this.token, id).subscribe(
				response => {

          if(!response.album){
            this._router.navigate(['/']);
          }

          else{
            this.album = response.album;

            this._songService.getSongs(this.token, response.album._id).subscribe(
                response => {
                  if(!response.songs){
                    this.alertMessage = 'Este album no tiene canciones';
                  }else{
                    this.songs = response.songs;
                  }
                },
                error => {
                  var errorMessage = <any>error;
                      if(errorMessage != null){
                        var body = JSON.parse(error._body);
                        this.alertMessage = body.message;
                      }
                });
            }
        },

          error => {
            var errorMessage = <any>error;
                if(errorMessage != null){
                  var body = JSON.parse(error._body);
                  this.alertMessage = body.message;
                }
          });
		});

	}

}
