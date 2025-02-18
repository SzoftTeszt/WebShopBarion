import { Component } from '@angular/core';
import { ShopService } from '../shop.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  foods:any
  constructor(private foodsService:ShopService, private basket:BasketService){
    this.foodsService.getFoods().subscribe(
      (res)=>this.foods=res
    )
  }

  addFood(food:any){
    this.basket.addFood(food)
  }
}
