let forestMusic = document.querySelector('.forest')
let rainMusica = document.querySelector('.rain')
let coffeeShopMusic = document.querySelector('.coffeeShop')
let firePlaceMusic = document.querySelector('.firePlace')

forestMusic.addEventListener('click', function(){
    forestMusic.classList.add('selectedCard')
    rainMusica.classList.remove('selectedCard')
    coffeeShopMusic.classList.remove('selectedCard')
    firePlaceMusic.classList.remove('selectedCard')
})

rainMusica.addEventListener('click', function(){
    rainMusica.classList.add('selectedCard')
    forestMusic.classList.remove('selectedCard')
    coffeeShopMusic.classList.remove('selectedCard')
    firePlaceMusic.classList.remove('selectedCard')
})

coffeeShopMusic.addEventListener('click', function(){
    coffeeShopMusic.classList.add('selectedCard')
    forestMusic.classList.remove('selectedCard')
    rainMusica.classList.remove('selectedCard')
    firePlaceMusic.classList.remove('selectedCard')
})

firePlaceMusic.addEventListener('click', function(){
    firePlaceMusic.classList.add('selectedCard')
    forestMusic.classList.remove('selectedCard')
    rainMusica.classList.remove('selectedCard')
    coffeeShopMusic.classList.remove('selectedCard')
})

