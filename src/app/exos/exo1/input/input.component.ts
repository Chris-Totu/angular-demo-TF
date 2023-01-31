import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  //pas de constructeur c'est fine
  placeHolder: string = "Ceci est un placeholer";
  type: string = "text";
}
