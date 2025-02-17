import { Component } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  foods:any
  constructor(private foodsService:ShopService){
    this.foodsService.getFoods().subscribe(
      (res)=>this.foods=res
    )
  }
}
