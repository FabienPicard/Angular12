import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageOfTheDay } from './common/ImageOfTheDay.model';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private service: HttpClient;
  private key:string = 'api_key=Uvu21XECW3blLyYLHFgRzJbza8cM9RxK2yeojsWd';
  private url:string = 'https://api.nasa.gov/planetary/apod?'
  private date:string = '&date='

  constructor(param_service:HttpClient) {
    this.service = param_service;
   }

  public getImageOfTheDay(jour:String):Observable<ImageOfTheDay>{
    const obs1:Observable<any> = this.service.get(this.url + this.key + this.date + jour);
    const traitement = (param:any)=>{
      return param as ImageOfTheDay;
    }
    return obs1.pipe(map(traitement));
  }
}
