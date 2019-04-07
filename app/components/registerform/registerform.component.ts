import { Component, OnInit } from '@angular/core';
import {FormControl ,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  constructor() { }
  reactiveForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    confPassword : new FormControl ('',[Validators.required]),
  });
  ngOnInit() {
  }

}
