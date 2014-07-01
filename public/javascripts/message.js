	
function SendMessage(){	
	socket_SendMessage(document.getElementById('textAreaMessage').value);
}


function popUpMessage(messageContent, mesh){
	var element;
	var messagePosition;

	var tween = new TWEEN.Tween()
    .to( 0, 2000 )

    .onStart( function () {
		element	= document.createElement('div')
		document.body.appendChild(element);
		element.innerHTML = messageContent;
		element.className = 'message';
	
		setTimeout(function () { // Need this for animation CSS
			element.style.opacity = "1";
			//element.style.webkitTransform = "scale(1) rotate(0)"; 
  		}, 1);
	})

    .onUpdate( function () {
    	messagePosition	= THREEx.ObjCoord.cssPosition(mesh, camera,renderer)
		element.style.left	= (messagePosition.x-0-element.offsetWidth /2)+'px';
		element.style.top	= (messagePosition.y+20-element.offsetHeight/2)+'px';
    })

    .onComplete( function () {
    	element.style.opacity = "0";
		//element.style.webkitTransform = "scale(0) rotate(-12deg)";
    	var nb_event = 0;
    	element.addEventListener( 'webkitTransitionEnd', function( event ) { 
    		nb_event++;
    		if (nb_event==1)    // Number of CSS Transition Event for delete DIV
    		{
    			var aux = element.parentNode;
				aux.removeChild(element);
			}
		}, false );
    })
    .start();
}


function createTextAreaMessage(mesh){
 	// Creat Div with Text Input
	textArea	= document.createElement('div')
	document.body.appendChild(textArea)
	textArea.innerHTML = "<input type=\"text\" maxlength=\"30\" class=\"form-control\" id= \"textAreaMessage\" placeholder=\"Type your message\">";
	textArea.className= 'textArea';
	// Set position of the Div
	var textAreaPosition	= THREEx.ObjCoord.cssPosition(mesh, camera,renderer)
	textArea.style.left	= (textAreaPosition.x-textArea.offsetWidth /2)+'px';
	textArea.style.top	= (textAreaPosition.y-0-textArea.offsetHeight/2)+'px';
	document.getElementById("textAreaMessage").focus();
}

function deleteTextAreaMessage(){
	textArea.parentNode.removeChild(textArea);

}

function playerMessage(){
    if(onWritingMessage==0){
    createTextAreaMessage(returnMeshbyId(thisPlayerId));
    onWritingMessage=1;
    }
    else 
    {	 // Send message only if textArea is not empty
    	if (document.getElementById('textAreaMessage').value!=='')
    	{
    	 SendMessage();
    	}
         deleteTextAreaMessage();
         onWritingMessage=0;
    }
}