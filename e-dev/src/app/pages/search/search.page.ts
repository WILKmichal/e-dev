import { VideosService } from './../../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { InfoVideo } from '../../interfaces/info-video';
import { ModalController } from '@ionic/angular';
import { LectureVideoPage } from '../../modals/lecture-video/lecture-video.page';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  valueSearchBar: string;
  videos: InfoVideo[] = [];
  categories: string[];

  constructor(
    private videoService: VideosService,
    private modal: ModalController
  ) {

  }
  

  ngOnInit() {
    this.getCategories();
  }

  getResultSearchBar() {
    console.log(this.valueSearchBar);
    this.videoService.getCategorieVideos(this.valueSearchBar).then((all_videos: InfoVideo[]) => {
      this.videos = all_videos;
    })

  }
  getResultButton(value: string) {
    this.videoService.getCategorieVideos(value).then((all_videos: InfoVideo[]) => {
      this.videos = all_videos;
    })
  }
  async openVideo(video: InfoVideo) {
    console.log("openVideo");
    const modal = await this.modal.create({
      component: LectureVideoPage,
      componentProps: {
        'video': video
      }
    });
    return await modal.present();
  }
  getCategories() {
    this.videoService.getCategories().then((all_categories) => {
      this.categories = all_categories;
    });
  }


}
