import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }

  getFoods(){
    return this.http.get("https://spider-116a2-default-rtdb.europe-west1.firebasedatabase.app/foods.json")
  }
}
