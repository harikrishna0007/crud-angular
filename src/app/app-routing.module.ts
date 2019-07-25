import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';

import { PutComponent } from './put/put.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path:'get',
    component:GetComponent
  },
  {
    path:'post',
    component:PostComponent
  },
  {
    path:'put/:id',
    component:PutComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
