import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MustMatch } from 'src/app/helper/must-match.validatirs';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public username;
  public userbody; //will contain all info about user
  public accounts: Object = {};
  // public fs = require('fs');

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }


  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.registerForm.invalid) {
      return;
    }
    else {
      this.username = this.registerForm.controls.userName.value;
      this.userbody = this.registerForm.value;
      this.accounts[this.username] = { "info": this.userbody };
      localStorage.setItem("accounts", JSON.stringify(this.accounts));
      //TRY TO SAVE DATA IN JSON FILE BUT THE MODULE COULDNOT IDENTIFY FUNCTION REQUIRE THE 
      //SAME WAY AFTER INSTALL nodejs 
      // this.fs.writeFile("src/app/database/db.json", this.accounts[this.username], (err) => {
      //   if (err) {
      //     console.error(err);
      //     return;
      //   }
      //   console.log("file has been saved");

      // })

      console.log(this.registerForm.value);


      console.log(JSON.stringify(this.username));
      localStorage.setItem("userName", JSON.stringify(this.username));

      alert('You Register Successfully ');
    }

  }
}



