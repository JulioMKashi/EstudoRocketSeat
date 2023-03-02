
export function Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonCoffeeShopMusic,
    buttonFirePlaceMusic,
    buttonForestMusic,
    buttonRainMusic,
}){

    let secondClickFire = 0
    let secondClickCoff = 0
    let secondClickRain = 0
    let secondClickFore = 0

function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
}

function pause(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.remove('hide')
}

function resetControls(){
    buttonStop.classList.add('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
}

function forestHighlight(){
    buttonForestMusic.classList.add('selectedCard')
    buttonRainMusic.classList.remove('selectedCard')
    buttonCoffeeShopMusic.classList.remove('selectedCard')
    buttonFirePlaceMusic.classList.remove('selectedCard')
}

function rainHighlight(){
    buttonRainMusic.classList.add('selectedCard')
    buttonForestMusic.classList.remove('selectedCard')
    buttonCoffeeShopMusic.classList.remove('selectedCard')
    buttonFirePlaceMusic.classList.remove('selectedCard')
}

function coffeeShopHighlight(){
    buttonCoffeeShopMusic.classList.add('selectedCard')
    buttonForestMusic.classList.remove('selectedCard')
    buttonRainMusic.classList.remove('selectedCard')
    buttonFirePlaceMusic.classList.remove('selectedCard')
}

function firePlaceHighlight(){
    buttonFirePlaceMusic.classList.add('selectedCard')
    buttonForestMusic.classList.remove('selectedCard')
    buttonRainMusic.classList.remove('selectedCard')
    buttonCoffeeShopMusic.classList.remove('selectedCard')
}

function secondClickIncrementForest(){
    secondClickRain = 0
    secondClickCoff = 0
    secondClickFire = 0    
    if(secondClickFore <= 1){
        secondClickFore++
    }

    if (secondClickFore >= 2){
        buttonForestMusic.classList.remove('selectedCard')
        secondClickFore = 0
    }
}

function secondClickIncrementRain(){
    secondClickFore = 0
    secondClickCoff = 0
    secondClickFire = 0
    if(secondClickRain <= 1){
        secondClickRain++
    }

    if (secondClickRain >= 2){
        buttonRainMusic.classList.remove('selectedCard')
        secondClickRain = 0
    }
}

function secondClickIncrementCoffee(){
    secondClickRain = 0
    secondClickFore = 0
    secondClickFire = 0
    if(secondClickCoff <= 1){
        secondClickCoff++
    }

    if (secondClickCoff >= 2){
        buttonCoffeeShopMusic.classList.remove('selectedCard')
        secondClickCoff = 0
    }
}

function secondClickIncrementFire(){
    secondClickCoff = 0
    secondClickRain = 0
    secondClickFore = 0
    if(secondClickFire <= 1){
        secondClickFire++
    }

    if (secondClickFire >= 2){
        buttonFirePlaceMusic.classList.remove('selectedCard')
        secondClickFire = 0
    }
}

return{
    resetControls,
    pause,
    play,
    forestHighlight,
    rainHighlight,
    coffeeShopHighlight,
    firePlaceHighlight,
    secondClickIncrementForest,
    secondClickIncrementRain,
    secondClickIncrementCoffee,
    secondClickIncrementFire
}

}