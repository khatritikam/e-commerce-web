import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {
  public products: any

  public myInfo ={
    name: 'tansukh',
    lastname: 'khatri',
    salary: 500
  }

  constructor(
    private productService: ProductService,
    private routes : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProducts()
    let {name, lastname, salary} = this.myInfo
    console.log(name, lastname, salary)
  }


 

  getProducts() {
    this.productService.getProduct().subscribe({
      next: (val: any) => {
        this.products = val.filter(product => product.category === "flowers")

        // console.log(this.products)
        //console.log(val)  
      }, error: (err: any) => {
        console.log(err)  
      }
    })
  }

  goToDetailPage(event: any){
    const params = {
      type: event.category,
      id: event.id
    }
  //  console.log(params)
    
 }

}
