import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.css']
})
export class SeconnecterComponent implements OnInit {

  loginForm !:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'email':new FormControl(Validators.required,Validators.email),
      'password':new FormControl(Validators.required)
    })
  }

  onSubmit() {
    // console.log(f.value);  // { first: '', last: '' }
    // console.log(f.valid);  // false
    console.log(this.loginForm.value);

  }

}
