import { Component, OnInit ,Input } from '@angular/core';
import {Product} from 'src/app/models/product';
import { from } from 'rxjs';
@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  public myProduct: Product;
  constructor() { }
  @Input('product') product:Product;
  ngOnInit() {
  }

}
