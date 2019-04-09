import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductDisplayService } from 'src/app/services/product-display.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-single-product-details',
  templateUrl: './single-product-details.component.html',
  styleUrls: ['./single-product-details.component.scss']
})
export class SingleProductDetailsComponent implements OnInit {
  public product: Product;
  subscription: Subscription;
  constructor(private productdisplayservice: ProductDisplayService) {
    this.productdisplayservice.getProduct().subscribe((product) => {
      if (product) {
        this.product = product;
        console.log(product);
      }
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    
    this.subscription.unsubscribe();
  }

}
