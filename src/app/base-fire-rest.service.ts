import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BaseFireRestService {

  private dataSub= new BehaviorSubject<any>([])
  api="https://spider-116a2-default-rtdb.europe-west1.firebasedatabase.app/humans"
  user:any
  constructor(private http:HttpClient, private auth:AuthService) { 
    this.downloadHumans()
    this.auth.getLoggedUser().subscribe(
      (user)=>this.user=user
    )
  }

  getHumans(){
    return this.dataSub
  }

  pushHuman(human:any){

    this.http.post(this.api+".json?auth="+this.user.accessToken, human).forEach(
      ()=>this.downloadHumans()
    )
  }

  downloadHumans(){
    this.http.get(this.api+".json").subscribe(
      (data:any)=>{
        let adatok=[]
        for (const key in data) adatok.push({key:key, ...data[key] })          
        this.dataSub.next(adatok)  
        }
    ) 
  }

  updateHuman(human:any){
    const key= human.key
    delete human.key
    this.http.put(this.api+"/"+key+".json", human).forEach(
      ()=>this.downloadHumans()
    )
  }

  deleteHuman(human:any){
    this.http.delete(this.api+"/"+human.key+".json").forEach(
      ()=>this.downloadHumans()
    )
  }
    
}



