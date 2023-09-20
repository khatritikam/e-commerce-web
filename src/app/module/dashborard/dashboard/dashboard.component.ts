import { Component } from '@angular/core'
import { DasbordService } from '../dasbord.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public flowers: any
  public fruits:any
  public vegetables:any

  constructor(
    private productService: DasbordService,
    private routes : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.getflowers()
  }

  getflowers() {
    this.productService.getProduct().subscribe({
      next: (val: any) => {
        this.flowers = val.filter(product => product.category === "flowers")
        this.fruits = val.filter(product => product.category === "fruits")
        this.vegetables = val.filter(product => product.category === "vegetables")

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
