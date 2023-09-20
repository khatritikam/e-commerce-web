import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }

  addorders(data: any): Observable<any> {
    //console.log(data)
    return this.http.post('http://localhost:3000/orders', data);
  }

  getOrders():Observable<any>{
    return this.http.get(' http://localhost:3000/orders')
  }

  cancelOrder(id:number, orders:any): Observable<any>{
    console.log(orders,id)
    return this.http.put(`http://localhost:3000/orders/${id}`,orders)
  }

}
