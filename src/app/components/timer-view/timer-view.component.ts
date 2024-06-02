import { Component, Input } from "@angular/core";
import { Timer } from "../../classes/timer";

@Component({
    selector: 'timer-view',
    standalone: true,
    templateUrl: './timer-view.component.html',
    styleUrl: './timer-view.component.css'
})
export class TimerViewComponent {
    @Input() timer: Timer = new Timer(10,0,0);
    intervalId: any;
    isRunning: boolean = false;

    ngOnInit() {
        
    }
    
    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    startCountdown() {
        this.isRunning = true;
        this.intervalId = setInterval(() => {
            if (this.isRunning) {
                this.timer.tick();

                if (this.timer.isFinished()) {
                    this.clearInterval();
                }
            }
        }, 1000);
    }

    pauseCountdown() {
        this.isRunning = false;
    }
    
    resumeCountdown() {
        this.isRunning = true;
    }

    clearInterval() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
    }

}
  