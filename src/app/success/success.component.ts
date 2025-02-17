import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarionService } from '../barion.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {

  params:any

  constructor(private route:ActivatedRoute, private barion:BarionService){
      this.route.queryParams.subscribe(
        p=> {
          this.params=p
          console.log(this.params)
          this.barion.getPaymentState(this.params.paymentId).subscribe(
            (res)=>this.checkPayment(res)
          )
        }
      )


  }

    checkPayment(res:any){
      console.log(res)
      if (res.Status==="Succeeded" || res.Status==="Reserved") 
        console.log("Sikeres kifizetve!")
      else {
        console.log("Ki ne vidd! A csóringert nem tudta kifizetni!")
      }

    }

}
