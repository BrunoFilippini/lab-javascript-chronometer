class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval (() => {this.currentTime ++
      if (callback) {
        callback();

      }},  1000)}

  getMinutes() {
    let minutes = this.currentTime;
    return Math.floor(minutes / 60);
  }

  getSeconds() {
    let seconds = this.currentTime
    return Math.floor(seconds % 60)
  }

  getMilliSeconds() {
    let miliSec = this.currentTime
    return Math.floor(miliSec) 
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) { 

      return `0${value}`

    } else {
      
    return `${value}`
    } 
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0; 
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
