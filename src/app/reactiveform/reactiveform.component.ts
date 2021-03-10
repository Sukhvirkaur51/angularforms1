import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helper/mustmatch.validator';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  Registerform!:FormGroup

  constructor(private formbuilder:FormBuilder) { }

  submitted=false

  ngOnInit() {
    this.Registerform=this.formbuilder.group({

    username: ['',Validators.required],
    email:['',[Validators.required,Validators.email]] ,
    profile:['',Validators.required] ,
    address: ['',Validators.required],
    contact:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
    password:['',[Validators.required,Validators.minLength(5)]],
    confirmpassword:['',Validators.required],
    location:['',Validators.required],
    terms:['',Validators.required],
    gender:['',Validators.required],
    //Validators: MustMatch('password','confirmpassword')

  },
  {
    validator: MustMatch('password','confirmpassword')

  });
  }
  get f(){
return this.Registerform.controls;
  }
onSubmit(){
  this.submitted=true;
  if(this.Registerform.invalid)
  return;

}

}
