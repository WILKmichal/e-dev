import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LectureVideoPageRoutingModule } from './lecture-video-routing.module';

import { LectureVideoPage } from './lecture-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectureVideoPageRoutingModule
  ],
  declarations: [LectureVideoPage]
})
export class LectureVideoPageModule {}
