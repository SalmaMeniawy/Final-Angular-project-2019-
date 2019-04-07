import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor( public productService : ProductService) { }
  products : Product[];
  ngOnInit() {
    this.getProducts();
  }
  getProducts():void{
    this.products = this.productService.getProducts();
  }
}
