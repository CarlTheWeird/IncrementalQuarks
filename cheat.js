var wPressed = false;
var iPressed = false;
var nPressed = false;

window.onkeydown = function(e) {
  if(e.keyCode === 87){
    wPressed = true;
  }

  if(e.keyCode === 73){
    iPressed = true;
  }

  if(e.keyCode === 78){
    nPressed = true;
  }

  if(wPressed && iPressed && nPressed){
    parsedQuark = 100000000000000;

    wPressed = false;
    iPressed = false;
    nPressed = false;
  }
}
