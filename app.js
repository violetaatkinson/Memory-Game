document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name:'fire',
            img:'./images/fire.png'
        },
        {
            name:'fire',
            img:'./images/fire.png'
        },
        {
            name:'light',
            img:'./images/light.png'
        },
        {
            name:'light',
            img:'./images/light.png'
        },
        {
            name:'boot',
            img:'./images/boot.png'
        },
        {
            name:'boot',
            img:'./images/boot.png'
        },
        {
            name:'bag',
            img:'./images/bag.png'
        },
        {
            name:'bag',
            img:'./images/bag.png'
        },
        {
            name:'water',
            img:'./images/water.png'
        },
        {
            name:'water',
            img:'./images/water.png'
        },
        {
            name:'chainsaw',
            img:'./images/chainsaw.png'
        },
        {
            name:'chainsaw',
            img:'./images/chainsaw.png'
        }
    ]
  
    cardArray.sort(() => 0.5 - Math.random()) //refresca el juego
  
    const grid = document.querySelector('.grid') 
    const resultDisplay = document.querySelector('#result')// seleccionamos el score para ir actualizandolo
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = [] // pusheamos las cartas que encontramos su match

    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) { // loop over cardArray iteramos
        const card = document.createElement('img') // for each card create an img element
        card.setAttribute('src', './images/Background.png') // for each card set as an atr linking it to img/path
        card.setAttribute('data-id', i)  // for each card give them an id esa i pertenece al loop
        card.addEventListener('click', flipCard)// escuchar si le dieron click y si le dierpm click que se de vuelta
        grid.appendChild(card) // esto es para que se vayan creando dentro del div grid 
      }
    }

    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img') // seleccionamos todas las imgs
      const optionOneId = cardsChosenId[0] // 1st value in array // assignit to const opt1Id
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', './images/Background.png')
        cards[optionTwoId].setAttribute('src', './images/Background.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) { // chequeo que sean iguales
        alert('You found a match')
        cards[optionOneId].setAttribute('src', './images/trasparent.png')
        cards[optionTwoId].setAttribute('src', './images/trasparent.png')
        // como ya encontre sus pares no quiero que escuche
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else { // si las cartas no matchean quiero darlas vueltas para jugar de nuevo
        cards[optionOneId].setAttribute('src', './images/Background.png')
        cards[optionTwoId].setAttribute('src', './images/Background.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length // vamos cambiando el score a partir del largo del array de las cartas encontradas
      if  (cardsWon.length === cardArray.length/2) { // sabemos q encontramos todas si cardsWon = al largo de nuestro cardArray /2 xq hay 2 q son 
        resultDisplay.textContent ='Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id') // agarramos el id
      cardsChosen.push(cardArray[cardId].name)
      // cardsChosen es un array vacio y pusheamos del array de card el id card y su nombre
      cardsChosenId.push(cardId)
      // cardsChosenId es un array vacio y pusheamos el id
      this.setAttribute('src', cardArray[cardId].img) // agrega una img , basado en el id q tenga
      if (cardsChosen.length ===2) { // solo queremos 2
        setTimeout(checkForMatch, 500) // chequeamos el match
      }
    }
  
    createBoard()
  })




