	
function SendMessage(){
	
	socket_SendMessage(document.getElementById('textAreaMessage').value);

}


function popUpMessage(messageContent, mesh){
	var element;
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
				document.body.appendChild(element)
				element.innerHTML = "<center>"+messageContent+"</center>";
				element.style.border	= '0'
				element.style.height	= '142px';
				element.style.color = '#E9E9E9'
				element.style.width	= '200px';
				element.style.overflow	= 'hidden'
				element.style.position	= 'absolute'
				element.frameBorder	= '1'
				//console.log(messageContent);



            })
            .onUpdate( function () {

            	messagePosition	= THREEx.ObjCoord.cssPosition(mesh, camera,renderer)
				element.style.left	= (messagePosition.x-element.offsetWidth /2)+'px';
				element.style.top	= (messagePosition.y-0-element.offsetHeight/2)+'px';


            })
            .onComplete( function () {
            	element.parentNode.removeChild(element);
            })
            .start();

            


    }


function createTextAreaMessage(mesh){

				textArea	= document.createElement('div')
				document.body.appendChild(textArea)
				textArea.innerHTML = "<input type=\"text\" class=\"form-control\" id= \"textAreaMessage\" placeholder=\"Type your message\">";
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