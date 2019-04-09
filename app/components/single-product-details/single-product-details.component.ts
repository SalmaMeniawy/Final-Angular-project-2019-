import { Component, OnInit } from '@angular/core';
// import { Subscription, from } from 'rxjs';
// import { ProductDisplayService } from 'src/app/services/product-display.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/data/mock-products';

@Component({
  selector: 'app-single-product-details',
  templateUrl: './single-product-details.component.html',
  styleUrls: ['./single-product-details.component.scss']
})
export class SingleProductDetailsComponent implements OnInit {

  private products: Product[];
  private selectedProduct: Product;

  constructor(private productsService: ProductService,
    private route: ActivatedRoute) {
    this.products = this.productsService.getProducts();
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i]["id"] === this.route.snapshot.paramMap.get('id')) {
        this.selectedProduct = this.products[i];
        console.log("We're good");
        console.log(this.selectedProduct);
      }
    }
  }

  ngOnInit() {
  }


}
