import { Injectable } from '@angular/core';
import { environments } from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarionService {

startAPI="https://api.test.barion.com/v2/Payment/start"
stateAPI="https://api.test.barion.com/v4/payment/"

paymentRequest = {
    POSKey: environments.POS_KEY,
    PaymentType: 'Immediate',
    GuestCheckOut: true,
    FundingSources: ['All'],
    OrderNumber: "Order_01",
    CardHolderNameHint:"Hab Zsolt",
    PaymentRequestId:"01",
    Transactions: [
      {
        POSTransactionId: 'TRANS001',
        Payee: 'szoftteszt2020@gmail.com', // Teszt e-mail cím
        Total: 5000, // Összeg HUF-ban
        Items: [
          {
            Name: 'Teszt termék1',
            Description: 'Ez egy teszt termék',
            Quantity: 1,
            Unit: 'piece',
            UnitPrice: 10000,
            ItemTotal: 10000
          },
          {
            Name: 'Teszt termék2',
            Description: 'Ez egy teszt termék',
            Quantity: 2,
            Unit: 'piece',
            UnitPrice: 2000,
            ItemTotal: 4000
          }            
        ]
      }
    ],
    RedirectUrl: 'https://6561-195-199-244-145.ngrok-free.app/success',
    CallbackUrl: 'https://5e36-195-199-244-145.ngrok-free.app/spider-116a2/us-central1/api/callback',
    Currency: 'HUF',
    Locale: 'hu-HU'
  }


  constructor(private http:HttpClient) { }

  startPayment(order:any){
    this.paymentRequest.Transactions[0].Items=order.orderDetails
    this.paymentRequest.Transactions[0].Total=order.orderDetails.reduce((sum:any, item:any)=>{
         return sum.unitPrice+item.unitPrice  
    })
    this.paymentRequest.OrderNumber=order.id
    this.paymentRequest.PaymentRequestId="PaymentRequest"+order.id

    return this.http.post(this.startAPI, this.paymentRequest)
  }

  getPaymentState(paymentId:any){
    let headers = new HttpHeaders().set('x-pos-key', environments.POS_KEY)
    // "https://api.test.barion.com/v4/payment/"
    return this.http.get(this.stateAPI+paymentId+"/paymentstate", {headers})

  }

}
