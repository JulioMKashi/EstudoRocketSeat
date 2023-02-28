
export function Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    timeOut
}){

function play(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
}

function pause(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.remove('hide')

    clearTimeout(timeOut)
}

function resetControls(){
    buttonStop.classList.add('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
}

return{
    resetControls,
    pause,
    play
}

}