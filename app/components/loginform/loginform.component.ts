import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  LoginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password:['',Validators.required]
    });
  }
  get f() { return this.LoginForm.controls; }
  onSubmit(){
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    }
    else {}
  }
}
