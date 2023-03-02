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

export {
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
}