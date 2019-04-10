import { Component, OnInit } from '@angular/core';
import {ProductWishListService} from 'src/app/services/product-wish-list.service';
import { Product } from 'src/app/models/product';
import { products } from 'src/app/data/mock-products';

@Component({
  selector: 'app-wishlistcounter',
  templateUrl: './wishlistcounter.component.html',
  styleUrls: ['./wishlistcounter.component.scss']
})
export class WishlistcounterComponent implements OnInit {
  private wishListProducts : Product[]=[];
  private numberOfProducts :number = 0;
  constructor(private productWishListService:ProductWishListService) { 
    this.productWishListService.getProduct().subscribe((product )=>{
      if(product)
      {
        if(this.wishListProducts.indexOf(product) === -1){
          this.wishListProducts.push(product);
          this.numberOfProducts = this.wishListProducts.length;
        }
        else{
          alert("product is already exist in wish List");
        }
      }
    });
  }

  ngOnInit() {
  }
  removeProductFromList(product)
  {
    if(this.wishListProducts.indexOf(product) === 1 )
    {
      this.wishListProducts.splice(this.wishListProducts.indexOf(product) , 1);
    }
    this.numberOfProducts = this.wishListProducts.length;
  }
}
