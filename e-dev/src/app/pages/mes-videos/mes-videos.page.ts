import { VideosService } from './../../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { InfoVideo } from '../../interfaces/info-video';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ModalController } from '@ionic/angular';
import { LectureVideoPage } from '../../modals/lecture-video/lecture-video.page';

@Component({
    selector: 'app-mes-videos',
    templateUrl: './mes-videos.page.html',
    styleUrls: ['./mes-videos.page.scss'],
})
export class MesVideosPage implements OnInit {

    videos: InfoVideo[];

    constructor(
        private router: Router,
        private videoService: VideosService,
        private modal: ModalController
    ) { }

    async ngOnInit() {
        this.ionViewWillEnter();
    }

    
    ionViewWillEnter() {
        this.router.events.subscribe(async (event) => {
            if (event instanceof NavigationEnd) {
                this.videos = await this.videoService.getOwnVideos("buyed");
            }
        });
    }
    getVideos(event){
        this.videoService.getOwnVideos(event.detail.value).then((all_videos: InfoVideo[]) => {
            this.videos = all_videos;
            if (this.videos.length == 0) {
              console.log("Aucune vidéos "+event.detail.value);
            } 
      
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

}
