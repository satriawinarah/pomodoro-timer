import { Component } from "@angular/core";

@Component({
    selector: 'timer',
    standalone: true,
    templateUrl: './timer.component.html',
    styleUrl: './timer.component.css'
})
export class Timer {

    onTypedHour(event: any) {
        event.target.value = this.truncateInputValue(event.target.value);
        console.log("hour: ", event.target.value);
    }

    onTypedMinute(event: any) {
        event.target.value = this.validateInputValue(event.target.value);
        event.target.value = this.truncateInputValue(event.target.value);

        console.log("minute:", event.target.value);
    }

    onTypedSecond(event: any) {
        event.target.value = this.validateInputValue(event.target.value);
        event.target.value = this.truncateInputValue(event.target.value);

        console.log("second:", event.target.value);
    }

    private truncateInputValue(inputValue: any): string {
        const maxLength = 2;
    
        if (inputValue && inputValue.length > maxLength) {
          return inputValue.slice(0, maxLength);
        } else {
          return inputValue;
        }
    }

    private validateInputValue(inputValue: string): string {
        const maxValue = 60;
        const numericValue = parseInt(inputValue, 10); // Convert to number
    
        if (numericValue > maxValue) {
          return maxValue.toString(); // Cap value at maximum
        } else {
          return inputValue; // Value is valid
        }
    }
}
  