import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonOneComponent } from './components/button-one/button-one.component';
import { ButtonTwoComponent } from './components/button-two/button-two.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerViewComponent } from './components/timer-view/timer-view.component';
import { Timer } from './classes/timer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonOneComponent, ButtonTwoComponent, TimerComponent, TimerViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('timer') timer!:TimerComponent
  @ViewChild('timerView') timerView!:TimerViewComponent
  title = 'pomodoro-timer';
  timerValue:Timer = new Timer(0,0,0)

  ngAfterViewInit() {
    // Now `timer` is initialized
    console.log(this.timer);
  }

  setCurrentTimerValue(event: any){
    this.timerValue=event;
  }

  handleButtonOneClick() {
    console.log('Button one clicked!');
    this.timer.getCurrentTimerValue();

    if (this.timerView.isRunning) {
      this.timerView.pauseCountdown();
    } else {
      if (this.timerView.intervalId) {
          clearInterval(this.timerView.intervalId);
      }
      this.timerView.startCountdown();
    }
    
    // Your logic for handling the button click goes here
  }

  handleButtonTwoClick() {
    this.timer.getCurrentTimerValue();
    this.timerValue = new Timer(0, 0, 0)
    this.timerView.isRunning = false;
  }
}
