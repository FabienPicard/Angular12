import { Component } from '@angular/core';
import { ImageOfTheDay } from './common/ImageOfTheDay.model';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgOfTheDay: ImageOfTheDay;
  jour: string;
  private service: NasaService;

  constructor(param_service: NasaService) {
    this.service = param_service;
    this.jour = new Date().toISOString().split('T')[0];
    this.getImage();
  }

  getImage() {
    this.service
      .getImageOfTheDay(this.jour)
      .subscribe((param: ImageOfTheDay) => {
        this.imgOfTheDay = param;
      });
  }

}
