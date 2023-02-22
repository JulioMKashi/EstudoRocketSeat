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

function countdown(){
    setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)    

        if(seconds <= 0){
            seconds = 60
        }

        secondsDisplay.textContent = seconds - 1
        countdown()
    }, 1000)
}

function addFiveMinutes(){
    minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = minutes + 5
}

function removeFiveMinutes(){
    minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = minutes - 5
    if(minutes <= 0 ){
        minutesDisplay.textContent = 25
    }
}
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

  countdown()
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
    addFiveMinutes()
})

buttonMinus.addEventListener('click', function(){
    removeFiveMinutes()
})

