import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormDialogComponent } from 'src/app/components/form-dialog/form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async create(event: any, type: string) {
    const modal = await this.modalController.create({
      component: FormDialogComponent,
      cssClass: 'form-dialog',
      componentProps: {
        type: type
      }
    });

    return await modal.present();
  }
}
