import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-rentyourspace',
  templateUrl: './rentyourspace.component.html',
  styleUrls: ['./rentyourspace.component.css']
})
export class RentyourspaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
      console.log(f.value);  // { first: '', last: '' }
      console.log(f.valid);  // false
    }

}
