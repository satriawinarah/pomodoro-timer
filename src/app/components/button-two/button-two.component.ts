import { Component } from "@angular/core";

@Component({
    selector: 'button-two',
    standalone: true,
    templateUrl: './button-two.component.html',
    styleUrl: './button-two.component.css'
  })
  export class ButtonTwo {
    buttonText = 'Reset';

    handleClick() {
        console.log('Button clicked!');
        // Your logic for handling the button click goes here
    }
  }
  