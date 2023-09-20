import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

export interface product {
  name: string;
  image: string;
  description: string;
  price: number;
  discount: number;
  category: string;
}

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})
export class VegetablesComponent implements OnInit {
  public products: any

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProduct().subscribe({
      next: (val: any) => {
        this.products = val.filter(product => product.category === "vegetables")

        // console.log(this.products)
        //console.log(val) 
      }, error: (err: any) => {
        console.log(err)  
      }
    })
  }

}
