import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductDeliverService } from 'src/app/services/product-deliver.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-cartcounter',
  templateUrl: './cartcounter.component.html',
  styleUrls: ['./cartcounter.component.scss']
})
export class CartcounterComponent implements OnInit {
  public subscription = Subscription;
  public numberOfProducts: number = 0;
  public products = {};
  constructor(private productDeliver: ProductDeliverService) {
    this.productDeliver.getProduct().subscribe((product) => {
      if (product) {


        if (this.products[product["name"]] === undefined) {


          this.products[product["name"]] = 1;
        }
        else {
          this.products[product["name"]]++;

        }

        this.numberOfProducts = this.countProducts(this.products);

      }
      else {
        // console.log("Products are empty");
      }

    });
  }

  ngOnInit() {
  }

  countProducts(obj) {
    let countArray = Object.values(obj);
    let arrsum = arr => arr.reduce((a, b) => a + b, 0);
    return arrsum(countArray);
  }

  removeProduct(product) {
    if (this.products[product.key] > 1) {
      this.products[product.key]--;
    } else {
      delete this.products[product.key];
    }

    this.numberOfProducts = this.countProducts(this.products);
  }
}
