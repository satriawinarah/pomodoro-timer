export class Timer {
    hours: number;
    minutes: number;
    seconds: number;
  
    constructor(hours: number, minutes: number, seconds: number) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    }
  
    tick() {
      if (this.seconds > 0) {
        this.seconds--;
      } else if (this.minutes > 0) {
        this.seconds = 59;
        this.minutes--;
      } else if (this.hours > 0) {
        this.seconds = 59;
        this.minutes = 59;
        this.hours--;
      }
    }
  
    toString() {
      return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
    }
  
    isFinished() {
      return this.hours === 0 && this.minutes === 0 && this.seconds === 0;
    }
}