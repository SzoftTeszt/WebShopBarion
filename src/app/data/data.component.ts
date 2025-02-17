import { Component } from '@angular/core';
import { BaseFireRestService } from '../base-fire-rest.service';
// import { BaseFireSocketService } from '../base-fire-socket.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  humans:any=[]
  newHuman:any={}

  constructor(private baseFireRest:BaseFireRestService){
    this.baseFireRest.getHumans().subscribe(
      (humans)=>this.humans=humans
    )
  }
  // constructor(private baseFireRest:BaseFireSocketService){
  //   this.baseFireRest.getHumans().subscribe(
  //     (humans)=>this.humans=humans
  //   )
  // }

  pushHuman(){
    // const human={
    //   name:"Kukor Ica",
    //   age: 42
    // }
    this.baseFireRest.pushHuman(this.newHuman)
    this.newHuman={}
  }

  updateHuman(human:any){
    this.baseFireRest.updateHuman(human)
  }
  deleteHuman(human:any){
    this.baseFireRest.deleteHuman(human)
  }

}
