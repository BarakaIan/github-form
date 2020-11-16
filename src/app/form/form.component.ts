import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
searchUser:string;
@Output()findEmmiter=new EventEmitter<any>();
  constructor() { }
findgitEmitter(){this.findEmmiter.emit(this.searchUser)}
  ngOnInit() {}

  input1:string="Welcome";
  }


