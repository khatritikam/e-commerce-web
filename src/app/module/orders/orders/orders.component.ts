import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'src/app/services/confirmation.service';
import { CoreService } from 'src/app/services/core.service';
import { OrdersService } from 'src/app/services/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{

  public orders:any

  constructor(
    private ordersService: OrdersService ,
    private snackBarService: CoreService,
    private confirmService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders(){
    this.ordersService.getOrders().subscribe({
      next: (val: any) => {
        this.orders = val
       // console.log(this.orders)
      }, error: (err: any) => {
        console.log(err)  
      }
    })
  }

  cancelOrder(id:number){
    const cancelConfirm  = this.confirmService.opneModel("Cancel Order", "Would you like to cancel order?")
    cancelConfirm.afterClosed().subscribe((res)=>{
      if (res){
        let currentOrder = this.orders.find((p)=>{return p.id === id})
        currentOrder["orderStatus"] = 'cancelled'
       // console.log(currentOrder)
        this.ordersService.cancelOrder(id,currentOrder).subscribe({
          next: (val:any) =>{
            this.getOrders()
            this.snackBarService.openSnackBar('Order Cancelled successfully!', 'Ok')
          }
        })
       
      }
    })
     
  }

}
