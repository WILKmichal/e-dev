import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UserRegister } from '../interfaces/user-register';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    url: string = 'http://localhost:3000'; // Le fichier JSON

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return new Promise((resolve, rejects) => {
            this.http.get(this.url + '/profil').subscribe((data: any) => {
                ((data.email == email) && (data.password == password)) ? resolve(data) : rejects(false);
            });
        });
    }

    register(user: UserRegister) {
        return new Promise((resolve, rejects) => {
            let profilJson: Object = {
                "username": user.first_name,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "dateNaissance": "1993-11-22",
                "phone": user.phone,
                "password": user.password,
                "avatar": "https://eu.ui-avatars.com/api/?name="+user.first_name,
                "videos_id": [
                    "6086960d24f0493c34462ee4",
                    "6086960d24f0493c34462ee1"
                ],
                "videos_published": [
                    "6086960d24f0493c34462ee2"
                ]
            };
            this.http.post(this.url + '/profil', profilJson).subscribe((data: any) => {
                resolve(data);
            });
        });
    }

    getProfile() {
        return this.http.get(this.url + '/profil');
    }
}