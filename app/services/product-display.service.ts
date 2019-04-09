import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductDisplayService {
  private subject = new Subject<any>();
  sendProduct(product: Product): void {
    this.subject.next(product);
  }
  getProduct(): Observable<any> {
    return this.subject.asObservable();
  }
  constructor() { }
}
