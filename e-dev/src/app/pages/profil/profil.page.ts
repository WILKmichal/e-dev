import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient
  ) { }

  ngOnInit() {
    let token;
    let profil;
    let auth: AuthService;
    if (this.platform.is("desktop")) {
      token = localStorage.getItem('token');
      if (token !== undefined && token !== null) {
        this.http.get('http://localhost:3000/profil').subscribe(profil => {
          this.profil = profil;
        });
      } else{
        alert("Votre session a expirée");
        this.router.navigate(['/login']);
      } 
    }
  }
}
