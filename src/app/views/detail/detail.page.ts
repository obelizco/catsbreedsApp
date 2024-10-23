import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ICat } from 'src/app/models/ICat.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @Input() detail!:ICat;
  constructor( private modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  close():void{
    this.modalCtrl.dismiss();
  }
}
