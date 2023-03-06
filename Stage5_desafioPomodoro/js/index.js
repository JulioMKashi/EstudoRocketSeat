import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import Music from "./music.js"
import {
    buttonForestMusic,
    buttonRainMusic,
    buttonCoffeeShopMusic,
    buttonFirePlaceMusic,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonMinus,
    minutesDisplay,
    secondsDisplay,
    minutes
} from "./elemests.js"

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonCoffeeShopMusic,
    buttonFirePlaceMusic,
    buttonForestMusic,
    buttonRainMusic
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    minutes
}) 

const music = Music()

buttonForestMusic.addEventListener('click', function(){
    music.buttonPress()
    music.buttonPressForest.play()
    controls.forestHighlight()
    controls.secondClickIncrementForest()
})

buttonRainMusic.addEventListener('click', function(){
    music.buttonPress()
    music.buttonPressRain.play()
    controls.rainHighlight()
    controls.secondClickIncrementRain()
})

buttonCoffeeShopMusic.addEventListener('click', function(){
    music.buttonPress()
    music.buttonPressCoffeePlace.play()
    controls.coffeeShopHighlight()
    controls.secondClickIncrementCoffee()
})

buttonFirePlaceMusic.addEventListener('click', function(){
    music.buttonPress()
    music.buttonPressFirePlace.play()
    controls.firePlaceHighlight()
    controls.secondClickIncrementFire()
})

buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    music.buttonPress()
})

buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    music.buttonPress()
})

buttonStop.addEventListener('click', function(){
    controls.resetControls()
    timer.resetTimer()
    music.buttonPress()
  })

  buttonPlus.addEventListener('click', function(){
    timer.addFiveMinutes()
})

buttonMinus.addEventListener('click', function(){
    timer.removeFiveMinutes()
})











