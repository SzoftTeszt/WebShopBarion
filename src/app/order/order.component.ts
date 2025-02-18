import { Component } from '@angular/core';
import { BarionService } from '../barion.service';
import { BasketService } from '../basket.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  cart:any
  total?:number
  constructor(private barion:BarionService, private basket:BasketService, private orderService:OrderService){
    this.basket.getBasket().subscribe(
      (res)=>{
        this.cart=res
        this.total=this.cart.reduce((sum:any, item:any)=>{
          // console.log("Sum", sum)
          return sum.unitPrice+item.unitPrice
        
        })
      
      }
    )
  }

  order(){
    const body:any={
      uid: "fiktív001",
      status:"Felvéve",
      orderDetails:this.cart
    }
    this.orderService.addOrder(body).subscribe(
      {
        next: (res:any)=>{
          let orderId=res.id
          console.log("Order.id", orderId)
          body.id=orderId
          this.startPayment(body)
        },
        error: (err)=>console.log(err)
      }
    )
  }
  startPayment(body:any){
    this.barion.startPayment(body).subscribe(
      {
        next: (res:any)=>{
          window.location.href=res.GatewayUrl
        },
        
        error: (err:any)=>console.log(err)
      }
    )
  }
}
