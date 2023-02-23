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
        let minutes = Number(minutesDisplay.textContent)
        
        secondsDisplay.textContent = "00"

        if(minutes <= 0 && seconds <= 0) {
            return
        }

        if(seconds <= 0){
            seconds = 2

            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }

        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
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
let secondClick = 0
buttonForestMusic.addEventListener('click', function(){
    buttonForestMusic.classList.add('selectedCard')
    buttonRainMusic.classList.remove('selectedCard')
    buttonCoffeeShopMusic.classList.remove('selectedCard')
    buttonFirePlaceMusic.classList.remove('selectedCard')

    secondClick++

    if (secondClick >= 2){
        buttonForestMusic.classList.remove('selectedCard')
        secondClick = 0
    }
})

buttonRainMusic.addEventListener('click', function(){
    buttonRainMusic.classList.add('selectedCard')
    buttonForestMusic.classList.remove('selectedCard')
    buttonCoffeeShopMusic.classList.remove('selectedCard')
    buttonFirePlaceMusic.classList.remove('selectedCard')

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

    secondClick++

    if (secondClick >= 2){
        buttonFirePlaceMusic.classList.remove('selectedCard')
        secondClick = 0
    }
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

