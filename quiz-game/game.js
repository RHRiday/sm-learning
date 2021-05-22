var name_hints = [ /*array that stores the hints*/
  { //index 1
    name: 'tomjerry',
    1: 'Everyone loves us',
    2: `We don't talk much`,
    3: 'The best cartoon ever',
    msg: 'How could you not know!'
  },
  { //index 2
    name: 'pokemon',
    1: 'So many names!!!',
    2: 'Many games are made on me',
    3: 'Pikaaaaaaa',
    msg: 'I choose you'
  },
  { //index 3
    name: 'GOT',
    1: 'People die a lot',
    2: 'Its about kings and queens',
    3: 'You know nothing',
    msg: 'And now my watch has ended'
  },
  { //index 4
    name: 'mustafa',
    1: `Most don't know my real name`,
    2: 'I have dinosaurs',
    3: 'I am just a game',
    msg: 'Oh those days!'
  },
  { //5
    name: 'breakingbad',
    1: 'You know exactly who I am',
    2: `I'm not in danger. I'm the danger`,
    3: 'I know chemistry, You know business',
    msg: `You're goddamn right`
  },
  { //6
    name: 'goku',
    1: 'I can beat Superman',
    2: 'My hair glows different color',
    3: 'Kamehameha',
    msg: 'Gee! My energy level is rising!'
  },
  { //7
    name: 'friends',
    1: 'I have the most lovable characters',
    2: `It's about friendship`,
    3: 'Could you be more stupid?',
    msg: 'So no one told you life was gonna be this way!'
  },
  { //8
    name: 'ring',
    1: 'I connect two people',
    2: 'People have to wear me in a certain occation',
    3: 'There is no shame wearing it in public',
    msg: 'A wedding ring!'
  },
  { //9
    name: 'ripon',
    1: 'I love you',
    2: 'Bondhu tumi eka hole dio amay daak',
    3: 'Tomar shathe golpo korbo ami shara raat',
    msg: `Hi prend, I'm Ripon ideo`
  },
  { //10
    name: 'superman',
    1: 'I can fly',
    2: `I'm a little shy`,
    3: `And people thought I'd die`,
    msg: `Is it a bird? Is is plane? No! it's superman!!`
  },
  { //11
    name: 'india',
    1: `I'm where chess was invented`,
    2: `I'm an asian country`,
    3: `Not enough toilet`,
    msg: `Naariyel annnaa!`
  },
  { //12
    name: 'rupanzel',
    1: `A disney princess but not on book`,
    2: `Was't raised by my own mother`,
    3: `Looooooong hair`,
    msg: `Oh my prince! I've been waiting for you`
  },
  { //13
    name: 'beastboy',
    1: `I can turn into any animal`,
    2: `I'm just a cartoon`,
    3: `Part of teen titans`,
    msg: `Old cartoons are great. Aren't they?`
  },
  { //14
    name: 'cake',
    1: `I have a good relation with candles`,
    2: `Sometimes I'm sweet sometimes I'm creamy`,
    3: `Birthdays are good days`,
    msg: `Don't each much. You'll get fat`
  },
  { //14
    name: 'panda',
    1: `I like being alone`,
    2: `I'm black and white`,
    3: `I like to eat a lot`,
    msg: `You are a Dragon warrior`
  },
]
var optimgarray = [ /*array that stores the choices*/
  {
    name: 'tomjerry',
    grp: 'tomjerry',
    smlsrc: 'images/tomjerry.jpg',
  },
  {
    name: 'mrbean',
    grp: 'tomjerry',
    smlsrc: 'images/mrbean.jpg',
  },
  {
    name: 'doraemon',
    grp: 'tomjerry',
    smlsrc: 'images/doraemon.jpg',
  }, //1
  {
    name: 'breakingbad',
    grp: 'GOT',
    smlsrc: 'images/breakingbad.jpg',
  },
  {
    name: 'GOT',
    grp: 'GOT',
    smlsrc: 'images/gameofthrones.jpg',
  },
  {
    name: 'vikings',
    grp: 'GOT',
    smlsrc: 'images/vikings.jpg',
  }, //2
  {
    name: 'pokemon',
    grp: 'pokemon',
    smlsrc: 'images/pokemon.jpg',
  },
  {
    name: 'GOT',
    grp: 'pokemon',
    smlsrc: 'images/gameofthrones.jpg',
  },
  {
    name: 'jurassic',
    grp: 'pokemon',
    smlsrc: 'images/jurassicworld.jpg',
  }, //3
  {
    name: 'jurassic',
    grp: 'mustafa',
    smlsrc: 'images/jurassicworld.jpg',
  },
  {
    name: 'mustafa',
    grp: 'mustafa',
    smlsrc: 'images/mustafa.jpg',
  },
  {
    name: 'walterwhite',
    grp: 'mustafa',
    smlsrc: 'images/walterwhite.jpg',
  }, //4
  {
    name: 'friends',
    grp: 'friends',
    smlsrc: 'images/friends.jpg',
  },
  {
    name: 'bbt',
    grp: 'friends',
    smlsrc: 'images/bbt.jpg',
  },
  {
    name: 'himym',
    grp: 'friends',
    smlsrc: 'images/himym.jpg',
  }, //5
  {
    name: 'breakingbad',
    grp: 'breakingbad',
    smlsrc: 'images/breakingbad.jpg',
  },
  {
    name: 'chernobyl',
    grp: 'breakingbad',
    smlsrc: 'images/chernobyl.jpg',
  },
  {
    name: 'moneyheist',
    grp: 'breakingbad',
    smlsrc: 'images/moneyheist.jpg',
  }, //6
  {
    name: 'ring',
    grp: 'ring',
    smlsrc: 'images/ring.jpg',
  },
  {
    name: 'condom',
    grp: 'ring',
    smlsrc: 'images/condom.jpg',
  },
  {
    name: 'friendship',
    grp: 'ring',
    smlsrc: 'images/friendship.jpg',
  }, //7
  {
    name: 'goku',
    grp: 'goku',
    smlsrc: 'images/goku.jpg',
  },
  {
    name: 'batman',
    grp: 'goku',
    smlsrc: 'images/batman.jpg',
  },
  {
    name: 'cryptonite',
    grp: 'goku',
    smlsrc: 'images/cryptonite.jpg',
  }, //8
  {
    name: 'ripon',
    grp: 'ripon',
    smlsrc: 'images/ripon.jpg',
  },
  {
    name: 'ilu',
    grp: 'ripon',
    smlsrc: 'images/ilu.jpg',
  },
  {
    name: 'heroalam',
    grp: 'ripon',
    smlsrc: 'images/heroalam.jpg',
  }, //9
  {
    name: 'superman',
    grp: 'superman',
    smlsrc: 'images/superman.jpg',
  },
  {
    name: 'ironman',
    grp: 'superman',
    smlsrc: 'images/ironman.jpg',
  },
  {
    name: 'thor',
    grp: 'superman',
    smlsrc: 'images/thor.jpg',
  }, //10
  {
    name: 'india',
    grp: 'india',
    smlsrc: 'images/india.jpg',
  },
  {
    name: 'england',
    grp: 'india',
    smlsrc: 'images/england.jpg',
  },
  {
    name: 'china',
    grp: 'india',
    smlsrc: 'images/china.jpg',
  }, //11
  {
    name: 'rupanzel',
    grp: 'rupanzel',
    smlsrc: 'images/rupanzel.jpg',
  },
  {
    name: 'cinderella',
    grp: 'rupanzel',
    smlsrc: 'images/cinderella.jpg',
  },
  {
    name: 'bloom',
    grp: 'rupanzel',
    smlsrc: 'images/bloom.jpg',
  }, //12
  {
    name: 'beastboy',
    grp: 'beastboy',
    smlsrc: 'images/beastboy.jpg',
  },
  {
    name: 'ben',
    grp: 'beastboy',
    smlsrc: 'images/ben.jpg',
  },
  {
    name: 'ditto',
    grp: 'beastboy',
    smlsrc: 'images/ditto.jpg',
  }, //13
  {
    name: 'cake',
    grp: 'cake',
    smlsrc: 'images/cake.jpg',
  },
  {
    name: 'fire',
    grp: 'cake',
    smlsrc: 'images/fire.jpg',
  },
  {
    name: 'balloon',
    grp: 'cake',
    smlsrc: 'images/balloon.jpg',
  }, //14
  {
    name: 'panda',
    grp: 'panda',
    smlsrc: 'images/panda.jpg',
  },
  {
    name: 'zebra',
    grp: 'panda',
    smlsrc: 'images/zebra.jpg',
  },
  {
    name: 'ghost',
    grp: 'panda',
    smlsrc: 'images/ghost.jpg',
  }, //15
]

//randomising arrays to not know what to come next
name_hints.sort(() => 0.5 - Math.random());
optimgarray.sort(() => 0.5 - Math.random());
count = 0;
score = 0;

//initializations of all global variables
hints = document.querySelector('#hints')
opt1 = document.querySelector('#option1')
opt2 = document.querySelector('#option2')
opt3 = document.querySelector('#option3')
question = document.querySelector('#question')
msg = document.querySelector('#msg')
options = document.querySelectorAll('.options')
nextHint = document.querySelector('#nextHint')

/*** THIS FUNCTION DECORATES THE PAGE ***/
function decorate(count) {

  /*** THIS WILL WORK WHEN QUIZ IS FINISHED ***/
  if (count == name_hints.length) {
    question.textContent = `You've found me ^_^`
    document.querySelector('#tap').remove();
    nextHint.remove();
    opt1.remove();
    opt2.remove();
    opt3.remove();
    var box1 = document.querySelector('.fdiv')
    var refresh = document.createElement('button')
    refresh.textContent = 'Play again!'
    refresh.className = 'nextHint';
    refresh.setAttribute('onclick', 'history.go(0);')
    box1.appendChild(refresh)
    var resultShow = document.createElement('span')
    resultShow.textContent = score+'/'+name_hints.length*10;
    resultShow.className = 'result'
    msg.textContent = 'Your score:'
    msg.appendChild(resultShow)
    alert('Your score is ' + score+ ' out of '+ name_hints.length*10+'.')
  }

  //initial variables
  hintcount = 2;
  point = 10
  //setting up the hints
  hint = document.createElement('li')
  hint.textContent = name_hints[count][1]
  hints.appendChild(hint)
  hints.setAttribute('data-id', name_hints[count].name)

  //creating a new array to store options that includes answer
  var temparray = []; /*array that stores options*/
  for (i = 0; i < optimgarray.length; i++) {
    if (name_hints[count].name === optimgarray[i].grp) {
      temparray.push(optimgarray[i])
    }
  } //this loop will store the answer in 0th index of [temparray]
  temparray.sort(() => 0.5 - Math.random()); //randomising the 3 options

  //setting up the options
  opt1.src = temparray[0].smlsrc
  opt1.setAttribute('data-id', temparray[0].name)
  opt1.addEventListener('click', checkMatch)
  opt2.src = temparray[1].smlsrc
  opt2.setAttribute('data-id', temparray[1].name)
  opt2.addEventListener('click', checkMatch)
  opt3.src = temparray[2].smlsrc
  opt3.setAttribute('data-id', temparray[2].name)
  opt3.addEventListener('click', checkMatch)
}

/*** THIS FUNCTION VERIFIES THE ANSWER ***/
function checkMatch() {
  var quesid = hints.getAttribute('data-id')
  var clickid = this.getAttribute('data-id')
  msg.textContent = name_hints[count].msg;
  if (clickid === quesid) {
    msg.className = 'right';
    score = score + point;
  } else {
    msg.className = 'wrong';
  }
  count++;
  setTimeout(function() {
    if (count <= name_hints.length) {
      resetdata();
      decorate(count);
    }
  }, 1800)

  opt1.removeEventListener('click', checkMatch)
  opt2.removeEventListener('click', checkMatch)
  opt3.removeEventListener('click', checkMatch)
}


/*** THIS FUNCTION WILL GENERATE THE HINTS WHEN CLICKED ***/
function showNextHint(s) {
  hintcount++;
  if (point > 5) {
    point = point - 3;
  }
  if (hintcount < 5) {
    hint = document.createElement('li')
    hint.textContent = name_hints[count][s]
    hints.appendChild(hint)
  }
}

/*** THIS FUNCTION RESETS ALL THE QUESTION DATA ***/
function resetdata() {
  hints.innerHTML = ''
  msg.textContent = ''
  msg.removeAttribute('class')
}
