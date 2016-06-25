

var divLetterPusher = getID("letter-pusher");
var divLetter1 = getID("game-letter-1");
var divLetter2 = getID("game-letter-2");
var btnNextRound = getID("btnNextRound");

function letterPushIn() {
  divLetterPusher.addClassName("hide");
}

function letterPushOut() {
  divLetterPusher.removeClassName("hide");
}

function setLetter1(new_val) {
  divLetter1.textContent = new_val;
}

function setLetter2(new_val) {
  divLetter2.textContent = new_val;
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomLetter() {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[getRandomInt(0, 25)]
}

function setLettersRandomly(){
  var l1 = getRandomLetter();
  var l2 = getRandomLetter();
  setLetter1(l1);
  setLetter2(l2);
}

function _doNextRound(){
  setLettersRandomly();
  letterPushOut();
  btnNextRound.disabled = false;
}

function nextRound(){
  btnNextRound.disabled = true;
  letterPushIn();
  window.setTimeout(_doNextRound, 1000);
  
}
