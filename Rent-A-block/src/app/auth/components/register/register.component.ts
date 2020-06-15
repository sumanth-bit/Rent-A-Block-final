import { Component, OnInit } from '@angular/core';
import {NgForm}  from "@angular/forms";
import {Router} from '@angular/router';
//import {AuthserviceService} from "..src/app/authservice.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData={}
  constructor(private router: Router,private _auth:AuthserviceService) { }

  ngOnInit(): void {
  }
registerUser()
{
  this._auth.registerUser(this.registerUserData).subscribe(

    res=> console.log(res),
    err=>console.log(err)
  )


}
}
