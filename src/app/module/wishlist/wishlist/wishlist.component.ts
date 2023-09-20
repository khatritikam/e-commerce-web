import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CoreService } from 'src/app/services/core.service';
import { WishlistService } from 'src/app/services/wishlist.service';

interface product {
  name: string;
  image: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  id:number
}

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public products: any
  
 

  constructor(
    private wishlistService : WishlistService,
    private snackBarService:CoreService 
  ){}

  ngOnInit(): void {
   this.getWishlist() 
  }

  getWishlist(){
    this.wishlistService.getWishlist().subscribe({
      next: (val: any) =>{
        this.products = val
       // console.log(this.products)
      }, error: (err: any) => {
       // console.log(err)  
      }
    })
  }

  removeproduct(id:number){
    this.wishlistService.removeFromWishlist(id).subscribe({
      next: (val:any) =>{
            this.snackBarService.openSnackBar('Removed From Your Wishlist', 'Ok')          
          this.getWishlist()
      }
    })
  }
}
