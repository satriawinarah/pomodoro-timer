import { Component } from "@angular/core";

@Component({
    selector: 'button-two',
    standalone: true,
    templateUrl: './button-two.component.html',
    styleUrl: './button-two.component.css'
  })
  export class ButtonTwoComponent {
    buttonText = 'Reset';
  }
  