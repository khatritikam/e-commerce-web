import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



interface IProduct {
  name: string;
  image:string;
  description: string;
  price:number;
  discount:number;
  category:string;
  id:number;
    
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

   productItems: IProduct[] = []

   constructor(
    private http: HttpClient
   ) { 
   }

    addToCart(products:IProduct[]){
      this.productItems = [...this.productItems, ...products]
    // this.productItems = products
    }
    
    get getItems(){
      //console.log(this.productItems)
      return this.productItems
      // console.log(data)
    }

    removeCartItme(idx:number){
      this.productItems.splice(idx,1)
      return this.productItems
    }

    clearCart(){
      this.productItems = []
    }

    getShippingPrices() {
      return this.http.get<{type: string, price: number}[]>('http://localhost:3000/shipping');
    }
  }


