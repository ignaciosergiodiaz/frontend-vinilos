import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { ArtistsService } from 'src/app/services/artists.services';
import { GLOBAL } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.services';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-artist-list',
  templateUrl: './../../views/artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
  providers: [UserService, ArtistsService ]
})
export class ArtistListComponent implements OnInit {

  titulo: string = "" ;
  artists:any;
  identity: any;
  token: any;
  url : string = "";
  alertMessage : string ="" ;
  is_edit = true ;
  next_page: number;
  prev_page: number;
  confirmado : any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _artistService: ArtistsService
  ) {

		this.titulo = 'Tus artistas preferidos';
		this.identity = this._userService.getIdentity();
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
		this.next_page = 1;
		this.prev_page = 1;
  }

  ngOnInit(): void {
    this.getArtists();
  }

  getArtists(){
    this._route.params.forEach((params:Params) => {

      let page  = +params['page'];

      if(!page){
        page = 1;
      }else{
        this.next_page = page+1;
        this.prev_page = page-1;

        if(this.prev_page == 0){
          this.prev_page = 1 ;
        }

      }

      this._artistService.getArtists(this.token, page, this.artists).subscribe(
        response => {
          if(!response){
            this._router.navigate(['/']);
          }else{
            this.artists = response.artists;
            // console.log(response.artists)
          }
        },
        err => {
          console.log(err)
        }
      )

    })
  }


  onDeleteConfirm(id:any){
    this.confirmado = id ;
  }

  onCancelArtist(){
      this.confirmado = null ;
  }

  onDeleteArtist(id:any){
    this._artistService.deleteArtist(this.token, id).subscribe(

        response => {
          console.log(response.artist)

          if(!response.artist){
            alert('Error en el servidor')
          }

          this.alertMessage = "¡El artista se ha borrado correctamente!";

          this.getArtists();
        },

        error => {

          var errorMessage = <any>error ;

          if(errorMessage != null ) {

            var body = JSON.parse(error._body);
            console.log(error);

          }

        }

    )
}

}
