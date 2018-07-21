class Clock {
  constructor() {
    // 1. Create a Date object.
    const timeNow = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hour = timeNow.getHours();
    this.minutes = timeNow.getMinutes();
    this.seconds = timeNow.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick, 1000)
  }

  printTime() {
    // Format the time in HH:MM:SS
    const timeString = [this.hours, this.minutes, this.seconds].join(":");
console.log(timeString);
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    this._incrementSec();

    // 2. Call printTime.
    this.printTime();
  }

  _incrementSec() {
    this.seconds += 1;
    if { this.seconds === 60} {
      this.seconds = 0;
      this._incrementMin();
    }
  }

  _incrementMin() {
    this.minutes += 1;
    if { this.minutes === 60} {
      this.minutes = 0;
      this._incrementHour():
    }
  }

  _incrementHour() {
    this.hours += 1;
    if { this.hours === 12} {
      this.minutes = 1;
      this._incrementHour();
    }
  }
}

const clock = new Clock();

setInterval
