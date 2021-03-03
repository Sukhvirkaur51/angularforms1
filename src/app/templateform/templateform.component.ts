import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hide = true;
  hide1= true;


 contactNumberPattern="^[6-9][0-9]{9}$";


  getvalues(f:NgForm){
    console.log(f.value);
  }

  model:any=[];

  gettext(f1:NgForm){
    alert("form submitted");

  }


default={
  location:'Select Location'

};

}
