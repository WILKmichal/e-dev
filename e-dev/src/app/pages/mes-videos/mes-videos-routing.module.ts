import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesVideosPage } from './mes-videos.page';

const routes: Routes = [
  {
    path: '',
    component: MesVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesVideosPageRoutingModule { }
