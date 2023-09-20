import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

export interface product {
  name: string;
  image: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  id:number
}

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  public products: any

  constructor(
    private productService: ProductService,
    private routes : Router
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProduct().subscribe({
      next: (val: any) => {
        this.products = val.filter(product => product.category === "fruits")

        // console.log(this.products)
        //console.log(val) 
      }, error: (err: any) => {
        console.log(err)  
      }
    })
  }

  goToDetailPage(event: any){
    // console.log(event)
   // this.routes.navigate(['Courses/Course', event])
  }
  
}
