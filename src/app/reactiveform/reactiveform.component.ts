import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Registerform= new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    profile: new FormControl(''),
    address: new FormControl('')

  });
  getdetails()
  {
    console.log(this.Registerform.value);
  }

}
