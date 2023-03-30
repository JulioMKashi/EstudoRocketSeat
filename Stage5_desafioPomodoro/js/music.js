

export default function Music(){

    const buttonPressForest = new Audio("https://github.com/JulioMKashi/EstudoRocketSeat/blob/main/Stage5_desafioPomodoro/audios/Floresta.wav")
    const buttonPressRain = new Audio("https://github.com/JulioMKashi/EstudoRocketSeat/blob/main/Stage5_desafioPomodoro/audios/Chuva.wav")
    const buttonPressCoffeePlace = new Audio("https://github.com/JulioMKashi/EstudoRocketSeat/blob/main/Stage5_desafioPomodoro/audios/Cafeteria.wav")
    const buttonPressFirePlace = new Audio("https://github.com/JulioMKashi/EstudoRocketSeat/blob/main/Stage5_desafioPomodoro/audios/Lareira.wav")

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