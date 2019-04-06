import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {products} from '../data/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts():Product[]{
    return products;
  }
}
