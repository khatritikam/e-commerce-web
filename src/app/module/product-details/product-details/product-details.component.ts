import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartService } from 'src/app/services/cart.service';
import {WishlistService} from 'src/app/services/wishlist.service'
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  products:any;
  productId:any;
  RouteParmObs:any;
  addedToWishlist:boolean = false;
  ruleOddEven:number = 0
  

  constructor(
   private activatedRoute: ActivatedRoute,
   private productService:ProductService,
   private cartService:CartService,
   private routes : Router,
   private wishlistService:WishlistService,
   private snackBarService: CoreService
   ){}
    ngOnInit(): void {
      
      //this.productId = this.activatedRoute.snapshot.paramMap.get('id')  
      // console.log(this.productId)  
      // console.log(this.activatedRoute.snapshot.params)

      this.RouteParmObs = this.activatedRoute.paramMap.subscribe((param) =>{
        this.productId = param.get('id');
        
      })

      this.getProducts()
    }

    getProducts() {
      this.productService.getProduct().subscribe({
        next: (val: any) => {
          //console.log(val)
          this.products= val.find(product => product.id == this.productId) 
          //console.log(this.products)
        }, error: (err: any) => {
          console.log(err)  
        }
      })
    }

    addToCart(items){
     // console.log(items)
      this.cartService.addToCart(items)
      this.snackBarService.openSnackBar('Added To Your Cart', 'Ok')
    }

    addToWishlist(){
      this.ruleOddEven = this.ruleOddEven + 1
      if(this.ruleOddEven % 2 != 0){
        this.wishlistService.addToWishlist(this.products).subscribe(()=>{
          //console.log(this.products)
          this.snackBarService.openSnackBar('Added To Your Wishlist ', 'Ok')
        })
        
      }else{
        this.wishlistService.removeFromWishlist(this.productId).subscribe(()=>{
          //console.log(this.products)
         this.snackBarService.openSnackBar('Remove From Your Wishlist ', 'Ok')
        })
        
      }
     
      
    }

    
}



