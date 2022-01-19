const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
/*   printMinutes()
  printSeconds()
  printMilliseconds() */
}

function printMinutes() {
  setInterval(() => {
    let minute = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
    minDecElement.innerText = `${minute.charAt(0)}`
    minUniElement.innerText = `${minute.charAt(1)}`
  }, 1000)
}

function printSeconds() {
  setInterval(() => {
    let second = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
    secDecElement.innerText = `${second.charAt(0)}`
    secUniElement.innerText = `${second.charAt(1)}`
  }, 1000)
}

// ==> BONUS
function printMilliseconds() {
  setInterval(() => {
    let miliSec = chronometer.computeTwoDigitNumber(chronometer.getMilliSeconds())
    milDecElement.innerText = `${miliSec.charAt(0)}`
    milUniElement.innerText = `${miliSec.charAt(1)}`
  }, 10)
}

function printSplit() {
  const split = document.createElement("li")
  split.innerText = chronometer.split()
  splitsElement.appendChild(split)
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  printSplit(chronometer.split)
}

function setStartBtn() {
  chronometer.start(printTime)
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.classList.toggle("stop")
  if (btnLeftElement.innerText === 'START'){
    chronometer.start();
    printMinutes()
    printSeconds()
    printMilliseconds()

  btnLeftElement.innerText = "STOP"
  } else {
    btnLeftElement.innerText = "START"
    chronometer.stop()
  }
  
  btnRightElement.classList.toggle("split")
  if (btnRightElement.innerText === "RESET"){
    btnRightElement.innerText = "SPLIT"
  } else {
    btnRightElement.innerText = "RESET"
  }

/*   setInterval(function(){ 
    console.log(chronometer.getSeconds()); 
  }, 1000); */
  

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === "RESET") {
    chronometer.reset()
  } else {
    printSplit(chronometer.split())
/*     console.log(chronometer.split()) */
  }

});
