import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup

  constructor(
    private fb: FormBuilder, 
    private userSerivce:UserService,
    private router:Router,
    private toastr: ToastrService
    ) {

    let formControls = {
      restauname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      adresse: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      phone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
    }

    this.addUserForm = this.fb.group(formControls)
  }

  get restauname() { return this.addUserForm.get('restauname') }
  get adresse() { return this.addUserForm.get('adresse') }
  get phone() { return this.addUserForm.get('phone') }


  ngOnInit(): void {
  }

  addUser() {
    let data = this.addUserForm.value;

    let user = new User(data.restauname,data.adresse,null,data.phone);

    this.userSerivce.addUser(user).subscribe(
      res=>{
        
        this.toastr.success(res.message);
        this.router.navigate(['/restaulist']);
      },
      err=>{
        console.log(err);
      }
    )

  }
}
