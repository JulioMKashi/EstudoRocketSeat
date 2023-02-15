export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}){

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function updateDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2,"0")
  secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

function countdown(){
  timerTimeOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateDisplay(minutes, 0)

    if( seconds <= 0) {
      seconds = 2
      --minutes
    }
    
    updateDisplay(minutes, String(seconds - 1))
    
    if (minutes <= 0) {
      resetControls()
      return
    }

    countdown()
  }, 1000)
}

function updateMinutes(newMinutes) {
  minutes = newMinutes
}

function hold() {
  clearTimeout(timerTimeOut)
}

return{
  countdown,
  reset,
  updateDisplay,
  updateMinutes,
  hold
}

}