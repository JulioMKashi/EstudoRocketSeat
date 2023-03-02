

export default function Music(){

    const buttonPressForest = new Audio("Floresta.wav")
    const buttonPressRain = new Audio()
    const buttonPressCoffeePlace = new Audio()
    const buttonPressFirePlace = new Audio()

    function playMusicForest(){
        buttonPressForest.play()
    }

    function playMusicRain(){
        buttonPressRain.play()
    }

    function playMusicCoffeePlace(){
        buttonPressCoffeePlace.play()
    }

    function playMusicFirePlace(){
        buttonPressFirePlace.play()
    }
    return{
        playMusicForest,
        playMusicRain,
        playMusicCoffeePlace,
        playMusicFirePlace
    }
}