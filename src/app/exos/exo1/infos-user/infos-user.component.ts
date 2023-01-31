import { Component } from '@angular/core';

@Component({
  selector: 'app-infos-user',
  templateUrl: './infos-user.component.html',
  styleUrls: ['./infos-user.component.scss']
})
export class InfosUserComponent {
  age: number;
  hobby: string;
  pseudo: string;

  constructor(){
    this.age = 25;
    this.hobby = "la planche à voile";
    this.pseudo = "Justickot";
  }
  
  getUserInfos(){
    return `Je suis ${this.pseudo}, j'ai ${this.age} et j'aime ${this.hobby}.`;
  }
}