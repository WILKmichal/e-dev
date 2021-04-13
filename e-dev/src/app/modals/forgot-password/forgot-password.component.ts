import { Component, Input, OnInit } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['../../pages/login/login.page.scss', './forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

    @Input() emailer: string;

    constructor(private modal: ModalController, private ionic: IonicModule) {}

    ngOnInit() {
        console.log(this.emailer);
    }

    close() {
        this.modal.dismiss({
            'dismissed': true
        });
    }

}