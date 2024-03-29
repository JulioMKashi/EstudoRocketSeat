import { Controls } from "./controls.js"
import Music from "./music.js"

export function Timer({
    minutesDisplay,
    secondsDisplay,
    minutes,
}){

    let timeOut

function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2,"0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown(){
    timeOut = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)    
        let minutes = Number(minutesDisplay.textContent)
        
        secondsDisplay.textContent = "00"

        if(minutes <= 0 && seconds <= 0) {
            Music().endTimer()
            return
        }

        if(seconds <= 0){
            seconds = 2
            --minutes
        }

        updateDisplay(minutes, seconds - 1)
        countdown()
    }, 1000)
}

function addFiveMinutes(){
    minutes = Number(minutesDisplay.textContent)
    updateDisplay(minutes + 5, 0)
}

function removeFiveMinutes(){
    minutes = Number(minutesDisplay.textContent)
    if(minutes >= 5){
        updateDisplay(minutes - 5, secondsDisplay.textContent)
    }
    else if (minutes <=5){
        updateDisplay(minutes - 1, secondsDisplay.textContent)
    }
    if(minutes <= 0 ){
        minutesDisplay.textContent = 25
        Controls().resetControls()
    }
}

function hold(){
    clearTimeout(timeOut)
}

function resetTimer() {
    clearTimeout(timeOut)
    updateDisplay(minutes, 0)
}

    return{
        resetTimer,
        removeFiveMinutes,
        addFiveMinutes,
        countdown,
        updateDisplay,
        hold
    }
}