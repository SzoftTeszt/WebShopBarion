import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl="https://localhost:7208/api/Orders"
  constructor(private http:HttpClient) { }

  addOrder(order:any){
    return this.http.post(this.apiUrl,order)
  }
}
