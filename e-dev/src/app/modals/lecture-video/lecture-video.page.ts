import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { InfoVideo } from '../../interfaces/info-video';

@Component({
  selector: 'app-lecture-video',
  templateUrl: './lecture-video.page.html',
  styleUrls: ['./lecture-video.page.scss'],
})
export class LectureVideoPage implements OnInit {
  
  @Input() video: InfoVideo;

  constructor(private modal: ModalController, private ionic: IonicModule) { }

  ngOnInit() {
  }

  close() {
    this.modal.dismiss({
        'dismissed': true
    });
}
}
