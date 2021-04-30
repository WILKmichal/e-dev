import { VideosService } from './../../services/videos.service';
import { Component, OnInit } from '@angular/core';
import { UploadVideo } from '../../interfaces/upload-video';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.page.html',
  styleUrls: ['./upload-video.page.scss'],
})
export class UploadVideoPage implements OnInit {

  isCompleted: boolean = false;
  isFree: boolean = true;
  categories: string[] = [];

  infoVideo: UploadVideo = {
    title : '',
    description : '',
    category : '',
    thumbnail : '',
  }
  
  constructor(
    private videoService: VideosService
    ) { }

  ngOnInit() {
    this.getCategories();
  }
  uploadThumbnail(){
    
  }
  uploadVideo(){

  }
  segmentChanged(event){
    event.detail.value;
    if(event.detail.value == "free") this.isFree = true;
    else if(event.detail.value == "paid") this.isFree = false;
  }
  getCategories() {
    this.videoService.getCategories().then((all_categories) => {
      this.categories = all_categories;
    });
  }
}
