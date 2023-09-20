import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  adduser(data: any): Observable<any> {
    console.log(data)
    return this.http.post(' http://localhost:3000/user', data);
  }

  getuser():Observable<any>{
    return this.http.get(' http://localhost:3000/user')
  }
}
