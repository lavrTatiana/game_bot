function isNumber(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
}

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function userAnswer() {
  let number = prompt('Try to guess! Enter a number.');
  if (number == null) {
    alert('Bye-bye!');
    exit();
  } else if (!isNumber(number)) {
    alert("Hey, guy! Are you trying to cheat me? I'm waiting for a number! Let's click 'ok' and try again!");
    return userAnswer();
  } else {
  return (number*1);
  }
}


function singleGame(conceivedNumber) {  
  let a = userAnswer();

  if (a == conceivedNumber){
    let confession = confirm("Good job, friend! Click 'Cancel' if you want to finish the game or 'Ok' to start a new game :)");
    if (confession) {
      return gameBot();
    } else {
      alert('See you later');
      return;
    }
  } else if (a > conceivedNumber) {
    alert('My number is less than yours. Click ok and try again!');
    return singleGame(conceivedNumber);
  } else {
    alert('My number is bigger than yours. Click ok and try again!');
    return singleGame(conceivedNumber);
  }
}

function gameBot() {
  let conceivedNumber = randomInteger(0, 100);

  singleGame(conceivedNumber);
}

gameBot();