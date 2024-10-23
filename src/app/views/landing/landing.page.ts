import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CatsService } from 'src/app/core/services/cats.service';
import { ICat } from 'src/app/models/ICat.interface';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})


export class LandingPage implements OnInit {
  cats: ICat[] = [];
  filteredCats: ICat[] = [];
  raza: string = '';
  constructor(private _catsService: CatsService,
    private _modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.getBreeds();
  }

  getBreeds(): void {
    this._catsService.getBreeds().subscribe((data:ICat[]) => {
      this.filteredCats = data;
      this.cats = data;
    });
  }


  search(event: any) {
    const query = event.target.value.toLowerCase();
    if (query && query.trim() !== '') {
      this.filteredCats = this.cats.filter(cat =>
        cat.name.toLowerCase().includes(query)
      );
    } else {
      this.filteredCats = [...this.cats]; 
    }
  }

  
  async redirectDetail(detail: ICat): Promise<void> {
    const modal = await this._modalCtrl.create({
      component: DetailPage,
      componentProps: { detail }
    });
    await modal.present();
  }

}
