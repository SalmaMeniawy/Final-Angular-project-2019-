import { Component, OnInit } from '@angular/core';
import { ProductWishListService } from 'src/app/services/product-wish-list.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-wish-list-counter-details',
  templateUrl: './wish-list-counter-details.component.html',
  styleUrls: ['./wish-list-counter-details.component.scss']
})
export class WishListCounterDetailsComponent implements OnInit {
  private wishListProducts :Product[]=[];
  constructor(private wishlistDeliver:ProductWishListService) { 
    this.wishlistDeliver.getProduct().subscribe((product)=>{
      if(product)
      {
        if(this.wishListProducts.indexOf(product)=== -1){
          this.wishListProducts.push(product);
          console.log(product);
          console.log(this.wishListProducts);
        }
        else{
          console.log("the product already exist");
        }
      }
    });

  }

  ngOnInit() {

  }

}
