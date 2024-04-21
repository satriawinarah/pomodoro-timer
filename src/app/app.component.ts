import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonOne } from './components/button-one/button-one.component';
import { ButtonTwo } from './components/button-two/button-two.component';
import { Timer } from './components/timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonOne, ButtonTwo, Timer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pomodoro-timer';
}
