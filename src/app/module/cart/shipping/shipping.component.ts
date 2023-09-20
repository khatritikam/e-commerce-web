import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit{

  shippingCosts!: Observable<{ type: string, price: number }[]>;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
     this.cartService.getShippingPrices().subscribe({
      next: (val: any) => {
        this.shippingCosts = val
        console.log(this.shippingCosts)
      }, error: (err: any) => {
        console.log(err)  
      }
    });
    
  }
}
