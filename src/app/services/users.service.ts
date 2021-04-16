import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getData() {
    const url: string = 'posts';
    return this.http.get(environment.API_URL + '/' + url);
  }


  // getData(){
  //   return {
  //     name:"peter",
  //     email:"peter@gmail.com",
  //     age:26
  //   }
  // }
}
