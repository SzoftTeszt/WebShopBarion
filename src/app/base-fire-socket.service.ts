import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseFireSocketService {

  private humanRef : AngularFireList<any>

 
   constructor(private db: AngularFireDatabase) { 
      this.humanRef=db.list("/humans")    
   }
 
   getHumans(){
     return this.humanRef.snapshotChanges().pipe(
      map(ch => ch.map(
        (c)=>({key: c.payload.key, ...c.payload.val()})
      ))
     )
   }
 
   pushHuman(human:any){
      this.humanRef.push(human)
   }
  
   updateHuman(human:any){
      const key= human.key
      delete human.key
      this.humanRef.update(key,human)
   }
 
   deleteHuman(human:any){
     this.humanRef.remove(human.key)
   }
     
}
