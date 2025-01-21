import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Model } from './model.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 private data = new BehaviorSubject<Model[]>([]);

 sharedData(data:any){
  const current = this.data.value;
  current.push(data);
  this.data.next(current);
 }

 getData(){
  return this.data;
 }
  constructor() {}
}
