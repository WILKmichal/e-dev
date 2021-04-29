import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesVideosPageRoutingModule } from './mes-videos-routing.module';

import { MesVideosPage } from './mes-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesVideosPageRoutingModule
  ],
  declarations: [MesVideosPage]
})
export class MesVideosPageModule {}
