import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  myForm: FormGroup

  constructor(private fb: FormBuilder) {

    let formControls = {
      restauname : new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ])
    }

    this.myForm = this.fb.group(formControls);

  }

  get restauname(){
    return this.myForm.get('restauname');
  }

  ngOnInit(): void {

  }

  saveUser(){
    console.log(this.myForm.value);
  }


}
