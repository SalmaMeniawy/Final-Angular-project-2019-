import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductDisplayService } from 'src/app/services/product-display.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {

  @Input() product: Product;
  constructor(private productdisplayservice: ProductDisplayService) { }
  showProduct(): void {
    this.productdisplayservice.sendProduct( this.product);
    // console.log("Hello from show product ");
  }
  ngOnInit() {
  }

}
