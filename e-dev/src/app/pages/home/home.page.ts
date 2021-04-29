import { VideosService } from './../../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { InfoVideo } from '../../interfaces/info-video';
import { AppComponent } from '../../app.component';
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
        private videoService: VideosService
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
}