import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface AuthResponseData{
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
// Methode to get the data
  getData(){
    const url: string = 'todos';
    return this.http.get(environment.API_URL + '/' + url);
  }

  // Methode to post the data (JsonServer)
  postData(createRessource:any) {
    const url:string = 'posts'
    return this.http.post(environment.API2_URL + '/' +url,createRessource)
  }

// Post the email & password of signup form (FireBase)
signUp(email: string, password: string) {
  return this.http.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=AIzaSyDmyZJfX4kE189qBP3x5mwFhn6kjLBQCB8`,
    {email, password, returnSecureToken: true}
  );
}
 


  // getData(){
  //   return {
  //     name:"peter",
  //     email:"peter@gmail.com",
  //     age:26
  //   }
  // }
}
