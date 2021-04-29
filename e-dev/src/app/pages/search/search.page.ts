import { VideosService } from './../../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { InfoVideo } from '../../interfaces/info-video';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  valueSearchBar: string;
  valueButton: string;
  videos: InfoVideo[];

  constructor(
    private router: Router,
    private videoService: VideosService
  ) {

  }

  ngOnInit() {
  }

  getResultSearchBar() {
    console.log(this.valueSearchBar);
    this.videoService.getCategorieVideos(this.valueSearchBar).then((all_videos: InfoVideo[]) => {
      this.videos = all_videos;
      
      if (this.videos.length === 0) {
        console.log("Aucune catégorie");
      } else console.log(this.videos);

    })

  }
  getResultButton(value: string) {
    this.videoService.getCategorieVideos(value).then((all_videos: InfoVideo[]) => {
      this.videos = all_videos;
      
      if (this.videos.length === 0) {
        console.log("Aucune catégorie");
      } 
    })

  }


}
