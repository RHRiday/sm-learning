function rock(choice){
  document.getElementById('hidden').removeAttribute('hidden');
  document.getElementById('p-pick').setAttribute("src", choice.src);
  switch (Math.floor(Math.random()*5+1)) {
    case 1: /*rock*/
    document.getElementById('c-pick').setAttribute("src", "rock.png");
    document.getElementById('result').innerHTML = "It's a Tie";
      break;
    case 2: /*paper*/
    document.getElementById('c-pick').setAttribute("src", "paper.png");
    document.getElementById('result').innerHTML = "<span style='color:red;'>You Lost</span>: Paper covered Rock";
    break;
    case 3: /*scissor*/
    document.getElementById('c-pick').setAttribute("src", "scissor.png");
    document.getElementById('result').innerHTML = "<span style='color:green;'>You Won</span>: Rock crushed Scissor";
    break;
    case 4: /*lizard*/
    document.getElementById('c-pick').setAttribute("src", "lizard.png");
    document.getElementById('result').innerHTML = "<span style='color:green;'>You Won</span>: Rock Crushed Lizard";
    break;
    case 5: /*spock*/
    document.getElementById('c-pick').setAttribute("src", "spock.png");
    document.getElementById('result').innerHTML = "<span style='color:red;'>You Lost</span>: Spock vaporized Rock";
    break;
    default:
  }
}
function paper(choice){
  document.getElementById('hidden').removeAttribute('hidden');
  document.getElementById('p-pick').setAttribute("src", choice.src);
  switch (Math.floor(Math.random()*5+1)) {
    case 1: /*rock*/
    document.getElementById('c-pick').setAttribute("src", "rock.png");
    document.getElementById('result').innerHTML = "<span style='color:green;'>You Won</span>: Paper covered Rock";
      break;
    case 2: /*paper*/
    document.getElementById('c-pick').setAttribute("src", "paper.png");
    document.getElementById('result').innerHTML = "It's a tie";
    break;
    case 3: /*scissor*/
    document.getElementById('c-pick').setAttribute("src", "scissor.png");
    document.getElementById('result').innerHTML = "<span style='color:red;'>You Lost</span>: Scissor cut Paper";
    break;
    case 4: /*lizard*/
    document.getElementById('c-pick').setAttribute("src", "lizard.png");
    document.getElementById('result').innerHTML = "<span style='color:red;'>You Lost</span>: Lizard ate Paper";
    break;
    case 5: /*spock*/
    document.getElementById('c-pick').setAttribute("src", "spock.png");
    document.getElementById('result').innerHTML = "<span style='color:green;'>You Won</span>: Paper disproved Spock";
    break;
    default:
  }
}
function scissor(choice){
  document.getElementById('hidden').removeAttribute('hidden');
  document.getElementById('p-pick').setAttribute("src", choice.src);
  switch (Math.floor(Math.random()*5+1)) {
    case 1: /*rock*/
    document.getElementById('c-pick').setAttribute("src", "rock.png");
    document.getElementById('result').innerHTML = "<span style='color:red;'>You Lost</span>: Rock crushed Scissor";
      break;
    case 2: /*paper*/
    document.getElementById('c-pick').setAttribute("src", "paper.png");
    document.getElementById('result').innerHTML = "<span style='color:green;'>You Won</span>: Scissor cut Paper";
    break;
    case 3: /*scissor*/
    document.getElementById('c-pick').setAttribute("src", "scissor.png");
    document.getElementById('result').innerHTML = "It's a tie";
    break;
    case 4: /*lizard*/
    document.getElementById('c-pick').setAttribute("src", "lizard.png");
    document.getElementById('result').innerHTML = "<span style='color:green;'>You Won</span>: Scissor decapitated Lizard";
    break;
    case 5: /*spock*/
    document.getElementById('c-pick').setAttribute("src", "spock.png");
    document.getElementById('result').innerHTML = "<span style='color:red;'>You Lost</span>: Spock smashed Scissor";
    break;
    default:
  }
}
function lizard(choice){
  document.getElementById('hidden').removeAttribute('hidden');
  document.getElementById('p-pick').setAttribute("src", choice.src);
  switch (Math.floor(Math.random()*5+1)) {
    case 1: /*rock*/
    document.getElementById('c-pick').setAttribute("src", "rock.png");
    document.getElementById('result').innerHTML = "<span style='color:red;'>You Lost</span>: Rock crushed Lizard";
      break;
    case 2: /*paper*/
    document.getElementById('c-pick').setAttribute("src", "paper.png");
    document.getElementById('result').innerHTML = "<span style='color:green;'>You Won</span>: Lizard ate Paper";
    break;
    case 3: /*scissor*/
    document.getElementById('c-pick').setAttribute("src", "scissor.png");
    document.getElementById('result').innerHTML = "<span style='color:red;'>You Lost</span>: Scissor decapitated Lizard";
    break;
    case 4: /*lizard*/
    document.getElementById('c-pick').setAttribute("src", "lizard.png");
    document.getElementById('result').innerHTML = "It's a tie";
    break;
    case 5: /*spock*/
    document.getElementById('c-pick').setAttribute("src", "spock.png");
    document.getElementById('result').innerHTML = "<span style='color:green;'>You Won</span>: Lizard poisoned Spock";
    break;
    default:
  }
}
function spock(choice){
  document.getElementById('hidden').removeAttribute('hidden');
  document.getElementById('p-pick').setAttribute("src", choice.src);
  switch (Math.floor(Math.random()*5+1)) {
    case 1: /*rock*/
    document.getElementById('c-pick').setAttribute("src", "rock.png");
    document.getElementById('result').innerHTML = "<span style='color:green;'>You Won</span>: Spock vaporized Rock";
      break;
    case 2: /*paper*/
    document.getElementById('c-pick').setAttribute("src", "paper.png");
    document.getElementById('result').innerHTML = "<span style='color:red;'>You Lost</span>: Paper disproved Spock";
    break;
    case 3: /*scissor*/
    document.getElementById('c-pick').setAttribute("src", "scissor.png");
    document.getElementById('result').innerHTML = "<span style='color:green;'>You Won</span>: Spock smashed Scissor";
    break;
    case 4: /*lizard*/
    document.getElementById('c-pick').setAttribute("src", "lizard.png");
    document.getElementById('result').innerHTML = "<span style='color:red;'>You Lost</span>: Lizard poisoned Spock";
    break;
    case 5: /*spock*/
    document.getElementById('c-pick').setAttribute("src", "spock.png");
    document.getElementById('result').innerHTML = "It's a tie";
    break;
    default:
  }
}
