import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import {ProductDeliverService} from 'src/app/services/product-deliver.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {

  @Input() product: Product;
  constructor(private productDeliver: ProductDeliverService) { }

  ngOnInit() {
  }
  deliverProduct(){
    this.productDeliver.sendProduct(this.product);
  }

}
