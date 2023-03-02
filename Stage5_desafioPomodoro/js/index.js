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
    controls.forestHighlight()
    controls.secondClickIncrementForest()
    music.playMusicForest()
})

buttonRainMusic.addEventListener('click', function(){
    controls.rainHighlight()
    controls.secondClickIncrementRain()
    music.playMusicRain()
})

buttonCoffeeShopMusic.addEventListener('click', function(){
    controls.coffeeShopHighlight()
    controls.secondClickIncrementCoffee()
    music.playMusicCoffeePlace()
})

buttonFirePlaceMusic.addEventListener('click', function(){
    controls.firePlaceHighlight()
    controls.secondClickIncrementFire()
    music.playMusicFirePlace()
})

buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
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











