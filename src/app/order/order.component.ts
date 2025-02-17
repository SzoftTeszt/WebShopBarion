import { Component } from '@angular/core';
import { BarionService } from '../barion.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  constructor(private barion:BarionService){}

  startPayment(){
    this.barion.startPayment().subscribe(
      {
        next: (res:any)=>{
          window.location.href=res.GatewayUrl
        },
        
        error: (err:any)=>console.log(err)
      }
    )
  }
}
