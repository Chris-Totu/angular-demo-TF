import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1-hello-world',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {
  private _firstName: string;
  private _lastName: string;
  isDisabled: boolean = false;

  constructor(){
    this._firstName = "John";
    this._lastName = "Doe";
  }
  //Getters
  public get firstName(): string {
    return this._firstName;
  }

  public get lastName() : string {
    return this._lastName; 
  }
  
}
