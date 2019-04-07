import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  constructor() { }
  loginForm = new FormGroup({
    userName : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
  });
  ngOnInit() {
  }

}
