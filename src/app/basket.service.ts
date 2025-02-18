import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketSub=new BehaviorSubject<any>([]);
  basket:any=[]
  constructor() { }
  getBasket(){
    return this.basketSub
  }
  addFood(food:any){
    const body:any={}
    body.name=food.nev
    body.description=food.leiras
    body.quantity=1
    body.unit=food.mennyiseg
    body.unitPrice=Number(food.ar)
    body.itemTotal=body.quantity*body.unitPrice

    this.basket.push(body)
    this.basketSub.next(this.basket)
  }
  deleteBasket(){
    this.basket=[]
    this.basketSub.next([])
  }
}
