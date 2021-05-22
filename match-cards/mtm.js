document.addEventListener('DOMContentLoaded', () =>{

  //setting up image locations
  locations = [
    {
      name: 'art',
      source: 'images/sketch.jpg'
    },
    {
      name: 'art',
      source: 'images/pencil.jpg'
    },
    {
      name: 'paint',
      source: 'images/canvas.jpg'
    },
    {
      name: 'paint',
      source: 'images/brushes.jpg'
    },
    {
      name: 'door',
      source: 'images/door.jpg'
    },
    {
      name: 'door',
      source: 'images/doorknob.jpg'
    },
    {
      name: 'cake',
      source: 'images/cake.jpg'
    },
    {
      name: 'cake',
      source: 'images/candle.jpg'
    },
    {
      name: 'basketball',
      source: 'images/basketball.jpg'
    },
    {
      name: 'basketball',
      source: 'images/hoop.jpg'
    },
    {
      name: 'trees',
      source: 'images/trees.jpg'
    },
    {
      name: 'trees',
      source: 'images/photosynthesis.png'
    },
    {
      name: 'tigers',
      source: 'images/bancric.jpg'
    },
    {
      name: 'tigers',
      source: 'images/tigers.jpg'
    },
    {
      name: 'rain',
      source: 'images/rain.jpg'
    },
    {
      name: 'rain',
      source: 'images/thunder.jpg'
    }
  ]
  locations.sort(() => 0.5-Math.random());

  const gameBox = document.querySelector('.gameBox');
  var chosenCard = [];
  var chosenCardId = [];
  var found = 0;
  var flipNum = 0;

  //creating the gameBox
  function createGame(){
    for(let i=0; i<locations.length; i++){
      card = document.createElement('img');
      card.setAttribute('src', 'card.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      gameBox.appendChild(card);
    }
  }

  //check if the 2 cards matched
  function checkForMatch(){
    if(chosenCard[0] === chosenCard[1]){
      document.querySelector('.match').setAttribute('style', 'color:green;');
      document.querySelector('.match').textContent = 'Found a match!';
      found++;
    }else{
      document.querySelector('.match').setAttribute('style', 'color:red;');
      document.querySelector('.match').textContent = 'Try again!';
      chosenCardId[0].setAttribute('src', 'card.png');
      chosenCardId[1].setAttribute('src', 'card.png');
    }
    chosenCard=[];
    chosenCardId=[];

    setTimeout(function(){
      document.querySelector('.match').textContent = ' ';
    }, 1000);

    if(found >= 8){
      document.querySelector('.result').setAttribute('style', 'color:green;');
      document.querySelector('.result').textContent = "Congratulations! You've found all Madarchod";
      document.querySelector('.msg').removeAttribute('hidden');
      document.querySelector('#flipCount').textContent = flipNum;
      document.querySelector('.replay').removeAttribute('hidden');
    }
  }

  //flip a card when clicked
  function flipCard(){
    flipNum++;
    cardID = this.getAttribute('data-id');
    chosenCard.push(locations[cardID].name);
    chosenCardId.push(this);
    this.setAttribute('src', locations[cardID].source);
    if(chosenCard.length === 2){
      setTimeout(checkForMatch, 500);
    }
  }

createGame();
})
