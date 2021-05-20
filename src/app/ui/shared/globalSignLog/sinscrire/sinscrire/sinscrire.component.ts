import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.css']
})
export class SinscrireComponent implements OnInit {

// @ViewChild('f') signUpForm!: NgForm ;
signUpForm!:FormGroup;

  // nom!:string;
  // prenom!:string;
  // email!:string;
  // password!:string;
  // type!: ['Giver','Beneficiary'];
  // adresse!:string;
  // tel!:string;

// submitted:boolean =false;

      // defined the service in constructor
      constructor(private users:UsersService) {}

  // =====Submit the form======
  // onFormSubmit(){
  //   this.submitted=true;
  //   this.nom=this.signUpForm.value.nom;
  //   this.prenom=this.signUpForm.value.prenom;
  //   this.email=this.signUpForm.value.email;
  //   this.password=this.signUpForm.value.password;
  //   this.type=this.signUpForm.value.type;
  //   this.adresse=this.signUpForm.value.adresse;
  //   this.tel=this.signUpForm.value.tel;
  //   // Refresh the form
  //   this.signUpForm.reset();
  // }

// show the data in form
  // fillValues()
  // {
  //   this.signUpForm.form.patchValue({
     
  //       nom:"alan",
  //       prenom:"walker",
  //       email:"alanwalker@gmail.com",
  //       password:"123456",
  //       type:"beneficiary",
  //       adresse:"los angles",
  //       tel:"+341584452168"
  //   }
  //   )
  // }

  onSubmit(){
    console.log(this.signUpForm);

    // Post the data with FireBase
    this.users.signUp(this.signUpForm.value.email,this.signUpForm.value.password).subscribe(response =>
      {console.log(response);
      },error =>{console.log(error)});

      // Post the data with JsonServer
      this.users.postData(this.signUpForm.value).subscribe(response => {
        console.log(response);
      })
      
  }

  ngOnInit(): void {
    this.signUpForm=new FormGroup({
      'nom':new FormControl(Validators.required),
      'prenom':new FormControl(Validators.required),
      'email':new FormControl([Validators.required,Validators.email]),
      'password':new FormControl(),
      'type':new FormControl(),
      'adresse':new FormControl(),
      'tel':new FormControl()
    })
  }

}
