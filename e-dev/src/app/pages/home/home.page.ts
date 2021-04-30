import { VideosService } from './../../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { InfoVideo } from '../../interfaces/info-video';
import { AppComponent } from '../../app.component';
import { ModalController } from '@ionic/angular';
import { LectureVideoPage } from '../../modals/lecture-video/lecture-video.page';
//const axios = require('axios');

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    videos: InfoVideo[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private videoService: VideosService,
        private modal: ModalController
    ) {

    }

    async ngOnInit() {
        this.ionViewWillEnter();
    }
    ionViewWillEnter() {
        this.router.events.subscribe(async (event) => {
            if (event instanceof NavigationEnd) {
                this.videos = await this.videoService.getDataBJson();
            }
        });
    }

    async openVideo(video: InfoVideo) {
        const modal = await this.modal.create({
            component: LectureVideoPage,
            componentProps: {
                'video': video
            }
        });
        return await modal.present();
    }
}