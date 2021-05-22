count = 0;

function rollbtn() {
  if (parseFloat(document.getElementById('playerScore').innerHTML) < 18) {
    rollpl();
    count++;
  }
}

function rollpl() {
  //generating random dice value
  var diceNum = Math.floor(Math.random() * 6 + 1);

  //inserting the found dice value image
  var dice = document.createElement("img");
  dice.setAttribute("src", `images/${diceNum}.png`);
  document.getElementById('score-box-1').appendChild(dice);

  //keep trace of the score
  p_score = parseFloat(document.getElementById('playerScore').innerHTML);
  p_score = p_score + diceNum;

  if (p_score < 18) {
    //coverting the score to new score
    document.getElementById('playerScore').innerHTML = p_score;
  } else {
    document.getElementById('playerScore').innerHTML = "!BUSTED";
    document.getElementById('playerScore').setAttribute('style', 'color:red');
    p_score = 0;
  }
}

function rollbot() {
  if (parseFloat(document.getElementById('botScore').innerHTML) < 18) {
    //generating random dice value
    var diceNum = Math.floor(Math.random() * 6 + 1);

      //inserting the found dice value image
      var dice = document.createElement("img");
      dice.setAttribute("src", `images/${diceNum}.png`);
      document.getElementById('score-box-2').appendChild(dice);

      //keep trace of the score
      b_score = parseFloat(document.getElementById('botScore').innerHTML);
      b_score = b_score + diceNum;

      if (b_score < 18) {
        //coverting the score to new score
        document.getElementById('botScore').innerHTML = b_score;
      } else {
        document.getElementById('botScore').innerHTML = "!BUSTED";
        document.getElementById('botScore').setAttribute('style', 'color:red');
        b_score = 0;
      }
  }
}

function hitbtn() {
  if (count < 3) {
    alert("You have to roll at least 3 times");
  } else {
    for (var i = 0; i < count; i++) {
      rollbot();
    }
    if (p_score > b_score) {
      document.getElementById('result').innerHTML = "Player Won";
      document.getElementById('result').className = "resetbtn";
    } else if (p_score < b_score) {
      document.getElementById('result').innerHTML = "Player Lost";
      document.getElementById('result').className = "hitbtn";
    } else {
      document.getElementById('result').innerHTML = "Match Drawn";
      document.getElementById('result').className = "rollbtn";
    }
    document.querySelector('.rollbtn').remove();
    document.querySelector('.hitbtn').remove();
  }
}
