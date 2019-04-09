import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductDeliverService {
  private subject = new Subject<any>();
  sendProduct(product: Product) {
    this.subject.next(product);
  }

  getProduct(): Observable<any> {
    return this.subject.asObservable();
  }

  clearProduct(): void {
    this.subject.next();
  }
  constructor() { }
}
