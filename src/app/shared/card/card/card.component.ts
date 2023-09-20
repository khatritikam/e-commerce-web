import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

interface IProduct {
  name: string;
  image:string;
  description: string;
  price:number;
  discount:number;
  category:string;
  id:number;
    
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  implements OnInit{

  public detailRoute: string

  @Output()
  productDetailId =  new EventEmitter<any>()

  @Input()
  products: IProduct

  constructor(
    private routes : Router
  ){}

  ngOnInit(): void {
 //   console.log(this.products)
       
  }

  // addToCard(productId:any){
  //   this.addToCartId.emit(productId)
  //   console.log(productId)
  // }

  showDetail(product: IProduct){
    this.productDetailId.emit(product)
    this.routes.navigate(['product-details', product.category,  product.id])
}

}
