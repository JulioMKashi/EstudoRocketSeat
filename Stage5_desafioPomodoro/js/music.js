

export default function Music(){

    const buttonPressForest = new Audio("https://github.com/JulioMKashi/EstudoRocketSeat/blob/main/Stage5_desafioPomodoro/audios/Floresta.wav?raw=true")
    const buttonPressRain = new Audio("https://github.com/JulioMKashi/EstudoRocketSeat/blob/main/Stage5_desafioPomodoro/audios/Chuva.wav?raw=true")
    const buttonPressCoffeePlace = new Audio("https://github.com/JulioMKashi/EstudoRocketSeat/blob/main/Stage5_desafioPomodoro/audios/Cafeteria.wav?raw=true")
    const buttonPressFirePlace = new Audio("https://github.com/JulioMKashi/EstudoRocketSeat/blob/main/Stage5_desafioPomodoro/audios/Lareira.wav?raw=true")

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    function buttonPress(){
        buttonPressAudio.play()
    }

    function endTimer(){
        kitchenTimer.play()
    }

    return{
        buttonPressForest,
        buttonPressRain,
        buttonPressCoffeePlace,
        buttonPressFirePlace,
        buttonPress,
        endTimer
    }
}