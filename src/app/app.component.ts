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
  @ViewChild('buttonOne') buttonOne!:ButtonOneComponent
  @ViewChild('buttonTwo') buttonTwo!:ButtonTwoComponent
  title = 'pomodoro-timer';
  timerValue:Timer = new Timer(0,0,0)
  timerVisibility = true
  timerViewVisibility = false
  buttonTwoVisibility = false
  buttonOneText = 'Start'

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
      console.log("Pause")
      this.buttonOneText = 'Resume'
      this.timerView.pauseCountdown();
    } else {
      console.log("Start or Resume")
      console.log("Current Timer Value:", this.timer.currentTimerValue)
      this.timerVisibility = false
      this.timerViewVisibility = true
      this.buttonTwoVisibility = true
      this.buttonOneText = 'Pause'
      if (this.timerView.intervalId) {
          clearInterval(this.timerView.intervalId);
      }
      this.timerView.startCountdown();
    }
  }

  handleButtonTwoClick() {
    this.timer.currentTimerValue = this.timer.previousTimerValue
    this.timerValue = new Timer(0, 0, 0)
    this.timerView.isRunning = false;

    this.timerViewVisibility = false
    this.timerVisibility = true
    this.buttonTwoVisibility = false
    this.buttonOneText = 'Start'
  }

  handleFinishedTimer(event :Boolean) {
    console.log('Handle finished timer called!')
    this.playAudio()
    this.buttonTwoVisibility = false
    this.buttonOneText = 'Start'
    this.timerViewVisibility = false
    this.timerVisibility = true
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../assets/alarm-clock-short.mp3";
    audio.load();
    audio.play();
  }
}
