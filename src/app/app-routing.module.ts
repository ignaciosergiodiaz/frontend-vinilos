import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsereditComponent } from './components/useredit/useredit.component';

const routes: Routes = [

  {path: '', component: UsereditComponent},
  {path: 'mis-datos', component: UsereditComponent},
  {path: '**', component: UsereditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
 