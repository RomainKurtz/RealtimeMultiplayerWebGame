	
function SendMessage(){
	
	socket_SendMessage(document.getElementById('textAreaMessage').value);

}


function popUpMessage(messageContent, mesh){
	var element;
	var elem;
	var messagePosition;


	/*
	 var tween = new TWEEN.Tween( { x: 50, y: 0 } )
            .to( { x: 400 }, 2000 )
            .easing( TWEEN.Easing.Elastic.InOut )
            */


 var tween = new TWEEN.Tween()
            .to( 0, 2000 )

            .onStart( function () {

            	//var elements	= document.createElement('div')
				//document.body.appendChild(elements)
				//elements.innerHTML	= 'threex'
				//elements.style.position	= 'absolute'


				element	= document.createElement('div')
				document.body.appendChild(element);
				element.innerHTML = messageContent;
				element.style.border	= '0';
				element.style.height	= '50px';
				element.style.color = '#E9E9E9'
				element.style.width	= '250px';
				element.style.overflow	= 'hidden'
				element.style.position	= 'absolute'
				element.style.color ="#09C"
				element.className = 'toto';
				element.style.opacity = "0";

				//element.frameBorder	= '1'
				//element.className ="message"
				//console.log(messageContent);
				//var elem = document.getElementsByClassName ("message")[0];
				//console.log(document.getElementsByClassName ("message"));
				//elem.style.webkitTransform = "scale(1) rotate(-10deg)";
				//elem.style.transition = "all (.25s)";
				//elem.style.opacity = "1";
				//elem.style.webkitTransform = "scale(2) rotate(0deg)";

				//console.log(element);
				//element = document.getElementsByClassName ("toto")[0];
				//console.log(element);
				setTimeout(function () { // Need this for animation CSS
					element.style.opacity = "1";
					element.style.background = "rgba(170, 170, 170, 0.168627)";
					element.style.webkitTransform = "scale(1) rotate(0)";
  				 }, 1);

				





            })
            .onUpdate( function () {

            	messagePosition	= THREEx.ObjCoord.cssPosition(mesh, camera,renderer)
				element.style.left	= (messagePosition.x-0-element.offsetWidth /2)+'px';
				element.style.top	= (messagePosition.y+20-element.offsetHeight/2)+'px';


            })
            .onComplete( function () {
            	element.style.opacity = "0";
				element.style.webkitTransform = "scale(0) rotate(-12deg)";
            	var nb_event = 0;
            	element.addEventListener( 'webkitTransitionEnd', function( event ) { 
            		nb_event++;
            		if (nb_event==2)    // Number of CSS Transition Event for delete DIV
            		{
            			var aux = element.parentNode;
						aux.removeChild(element);
					}
				}, false );
            	
            })
            .start();

            


    }


function createTextAreaMessage(mesh){

				textArea	= document.createElement('div')
				document.body.appendChild(textArea)
				textArea.innerHTML = "<input type=\"text\" maxlength=\"30\" class=\"form-control\" id= \"textAreaMessage\" placeholder=\"Type your message\">";
				//textArea.innerHTML = "<center>COUOUC !!!</center>";
				textArea.style.border	= '0'
				textArea.style.height	= '142px';
				textArea.style.color = '#E9E9E9'
				textArea.style.width	= '200px';
				textArea.style.overflow	= 'hidden'
				textArea.style.position	= 'absolute'
				textArea.frameBorder	= '1'

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
        {	 
        	 SendMessage()
             deleteTextAreaMessage();
             onWritingMessage=0;
        
        }
}