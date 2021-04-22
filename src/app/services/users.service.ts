import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
// Methode to get the data
  getData()
   {
    const url: string = 'todos';
    return this.http.get(environment.API_URL + '/' + url);
  }

  // Methode to post the data
  postData(createRessource:any)
  {
    
    const url:string = 'posts'
    return this.http.post(environment.API_URL+ '/'+ url,createRessource)
  }



  // getData(){
  //   return {
  //     name:"peter",
  //     email:"peter@gmail.com",
  //     age:26
  //   }
  // }
}
