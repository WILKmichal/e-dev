import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  profil: Object = {
    username: "Zoubida",
    first_name: "",
    last_name: "",
    email: "",
    dateNaissance: "",
    phone: "",
    password: "",
    avatar: ""
  }
  constructor(
    private platform: Platform,
    private storage: NativeStorage,
    private router: Router,
    private http: HttpClient,
    private loading: LoadingController
  ) { }

  async ngOnInit() {
    const load = await this.loading.create({
      message: 'Please wait...',
  });
  await load.present();
    if (this.platform.is("desktop")) {
      let token = localStorage.getItem('token');
      console.log(localStorage);
        this.http.get('http://localhost:3000/profil').subscribe(profil => {
          this.profil = profil;
        });
    }
    await this.loading.dismiss();
  }
  disconnected(){
    alert("Vous avez été déconnecté");
    this.router.navigate(['/login']);
  }
}
