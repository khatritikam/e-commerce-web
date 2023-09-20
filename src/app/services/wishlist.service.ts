import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(
    private http:HttpClient
  ) { }

  getWishlist():Observable<any>{
    return this.http.get(' http://localhost:3000/wishlist')
  }

  addToWishlist(product):Observable<any>{
    return this.http.post(' http://localhost:3000/wishlist',product)
  }

  removeFromWishlist(id:number){
    return this.http.delete(`http://localhost:3000/wishlist/${id}`)
  }


}
