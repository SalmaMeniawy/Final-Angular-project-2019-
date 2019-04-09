import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { from } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductDisplayService {

  constructor() { }
  private subject = new Subject<any>();
  sendProduct(product : Product){
    this.subject.next(product);
  }
  getProduct():Observable<any>
  {
    return this.subject.asObservable();
  }
}
