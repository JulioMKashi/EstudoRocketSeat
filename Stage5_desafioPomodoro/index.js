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
let minutes = Number(minutesDisplay.textContent)

buttonForestMusic.addEventListener('click', function(){
    buttonForestMusic.classList.add('selectedCard')
    buttonRainMusic.classList.remove('selectedCard')
    buttonCoffeeShopMusic.classList.remove('selectedCard')
    buttonFirePlaceMusic.classList.remove('selectedCard')
    
})

buttonRainMusic.addEventListener('click', function(){
    buttonRainMusic.classList.add('selectedCard')
    buttonForestMusic.classList.remove('selectedCard')
    buttonCoffeeShopMusic.classList.remove('selectedCard')
    buttonFirePlaceMusic.classList.remove('selectedCard')
})

buttonCoffeeShopMusic.addEventListener('click', function(){
    buttonCoffeeShopMusic.classList.add('selectedCard')
    buttonForestMusic.classList.remove('selectedCard')
    buttonRainMusic.classList.remove('selectedCard')
    buttonFirePlaceMusic.classList.remove('selectedCard')
})

buttonFirePlaceMusic.addEventListener('click', function(){
    buttonFirePlaceMusic.classList.add('selectedCard')
    buttonForestMusic.classList.remove('selectedCard')
    buttonRainMusic.classList.remove('selectedCard')
    buttonCoffeeShopMusic.classList.remove('selectedCard')
})

buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')

    setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)

    }, 1000)
})

buttonPause.addEventListener('click', function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.remove('hide')
})

buttonStop.addEventListener('click', function(){
    buttonStop.classList.add('hide')
    buttonPause.classList.add('hide')
})

buttonPlus.addEventListener('click', function(){
    minutesDisplay.textContent = minutes + 5
     
})

buttonMinus.addEventListener('click', function(){
    minutesDisplay.textContent = minutes - 5
})

