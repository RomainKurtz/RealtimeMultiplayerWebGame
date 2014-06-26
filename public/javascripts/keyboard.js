// DOC : http://www.kirupa.com/html5/keyboard_events_in_javascript.htm
// DOC : http://nokarma.org/2011/02/27/javascript-game-development-keyboard-input/
function initKeyboard(){

    window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
    window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);
}
			 
/*function dealWithKeyboard(e) {
	//console.log(e);

	// ZQSD
	if (e.keyCode == "68") {
        console.log("The 'd' key is pressed.");
    }
    if (e.keyCode == "113") {
        console.log("The 'q' key is pressed.");
    }
	if (e.keyCode == "90") {
        console.log("The 's' key is pressed.");
    }
    if (e.keyCode == "115") {
        console.log("The 'z' key is pressed.");
    }



    // ARROW
    	if (e.keyCode == "39") {
        //console.log("The 'right arrow' key is pressed.");
        socket_CubeMove({direction:'right'});
    }
        if (e.keyCode == "37") {
        // console.log("The 'left arrow' key is pressed.");
       	socket_CubeMove({direction:'left'});
    }
        if (e.keyCode == "38") {
        //console.log("The 'up arrow' key is pressed.");
        socket_CubeMove({direction:'up'});
    }
        if (e.keyCode == "40") {
        //console.log("The 'down arrow' key is pressed.");
        socket_CubeMove({direction:'down'});
    }
}*/

var Key = {
  _pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ENTER : 13,

  
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
   
    if(event.keyCode==13)
    {
        playerMessage();

    }
  },
  
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};


