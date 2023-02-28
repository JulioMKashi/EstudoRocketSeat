import { Timer } from "./timer.js"
import { Controls } from "./controls.js"

const buttonForestMusic = document.querySelector('.forest')
const buttonRainMusic = document.querySelector('.rain')
const buttonCoffeeShopMusic = document.querySelector('.coffeeShop')
const buttonFirePlaceMusic = document.querySelector('.firePlace')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plusMinutes')
const buttonMinus = document.querySelector('.minusMinutes')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(document.querySelector('.minutes').textContent)
let secondClick = document.querySelector('.secondCard')

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    minutes
}) 


buttonForestMusic.addEventListener('click', function(){
    buttonForestMusic.classList.add('selectedCard')
    buttonRainMusic.classList.remove('selectedCard')
    buttonCoffeeShopMusic.classList.remove('selectedCard')
    buttonFirePlaceMusic.classList.remove('selectedCard')

    timer.secondClickIncrement(secondClick)
})

buttonRainMusic.addEventListener('click', function(){
    buttonRainMusic.classList.add('selectedCard')
    buttonForestMusic.classList.remove('selectedCard')
    buttonCoffeeShopMusic.classList.remove('selectedCard')
    buttonFirePlaceMusic.classList.remove('selectedCard')

    let secondClick = 0

    secondClick++

    if (secondClick >= 2){
        buttonRainMusic.classList.remove('selectedCard')
        secondClick = 0
    }
})

buttonCoffeeShopMusic.addEventListener('click', function(){
    buttonCoffeeShopMusic.classList.add('selectedCard')
    buttonForestMusic.classList.remove('selectedCard')
    buttonRainMusic.classList.remove('selectedCard')
    buttonFirePlaceMusic.classList.remove('selectedCard')

    let secondClick = 0

    secondClick++

    if (secondClick >= 2){
        buttonCoffeeShopMusic.classList.remove('selectedCard')
        secondClick = 0
    }
})

buttonFirePlaceMusic.addEventListener('click', function(){
    buttonFirePlaceMusic.classList.add('selectedCard')
    buttonForestMusic.classList.remove('selectedCard')
    buttonRainMusic.classList.remove('selectedCard')
    buttonCoffeeShopMusic.classList.remove('selectedCard')

    let secondClick = 0

    secondClick++

    if (secondClick >= 2){
        buttonFirePlaceMusic.classList.remove('selectedCard')
        secondClick = 0
    }
})

buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function(){
    controls.pause()
})

buttonStop.addEventListener('click', function(){
    controls.resetControls()
    timer.resetTimer()
    
  })

  buttonPlus.addEventListener('click', function(){
    timer.addFiveMinutes()
})

buttonMinus.addEventListener('click', function(){
    timer.removeFiveMinutes()
})











