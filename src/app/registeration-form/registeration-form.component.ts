import { Component, Input, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-registeration-form',
  templateUrl: './registeration-form.component.html',
  styleUrls: ['./registeration-form.component.scss']
})
export class RegisterationFormComponent implements OnInit {
  submitted = false;
  space = " ";
  dataFromChild: any;
  Items = [
    { value: '1', label: 'Front' },
    { value: '2', label: 'Back' },

  ];
  Namesshow = [
    { value: '1', label: 'Front' },
    { value: '2', label: 'Back' },

  ];

  selectedValue: any;
  selectedValue2: any;

  ActiveCardName = 1;
  ActiveCardNumber = 1;
  name = 'Name Here ';
  namelogo ="custom logo";
  namecmnt ="Add Comment";
  NAme = "(Name Here)";
  logocmnt =" Custom logo";
  Comment ="Lorem ipsum text show"
  color: any;
  Cardnum = "0000 0000 0000 0000";
  test: any;
  borderone = false;
  bordertwo = false;


  log(value: any) {
    console.log(value)
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {



  }

  getvalue(val: any) {
    if (val) {
      this.NAme = val;

    }
    else {
      this.NAme = "(Name Here)";
    }

  }
  getcmnt(value: any) {
    if (value) {
      this.Comment = value;

    }
    else {
      this.NAme = "Lorem ipsum text show";
    }

  }

  getlogo(logotxt: any) {
    if (logotxt) {
      this.logocmnt = logotxt;

    }
    else {
      this.logocmnt = "custom logo";
    }

  }
  getcardnum(number: any) {
    if (number) {
      this.Cardnum = number;

    }
    else {
      this.Cardnum = "0000 0000 0000 0000";
    }

  }


  firstDropDownChanged(value: any) {
    this.ActiveCardName = value;
    console.log(this.ActiveCardName);

  }
  secondDropDownChanged(numbb: any) {
    this.ActiveCardNumber = numbb;
    console.log(this.ActiveCardName);

  }
  bgchange(value: any) {
    this.color = value;

  }
  border1() {
    this.borderone = true;
  }
  border2() {
    this.bordertwo = true;
    this.borderone = false;

  }
  bordersimple() {
    this.bordertwo = false;
    this.borderone = true;

  }
}
