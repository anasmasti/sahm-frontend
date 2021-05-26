import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContact(){
    const url:string ='api/contact';
    return this.http.get(environment.API_SAHM_URL + '/' + url);
  }
  
  PostContact(contact:any){
    const url:string ='api/contact';
    return this.http.post(environment.API_SAHM_URL + '/' + url,contact)
  }
}
