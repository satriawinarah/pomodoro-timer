import { Component, Input } from "@angular/core";

@Component({
    selector: 'button-one',
    standalone: true,
    templateUrl: './button-one.component.html',
    styleUrl: './button-one.component.css'
})
// ButtonOne for handling start and pause timer
export class ButtonOneComponent {
    @Input('buttonText') buttonText = 'Start';

    setButtonText(text: string){
        this.buttonText = text;
    }
}
  