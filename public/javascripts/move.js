function moveControlUpdate(){

	var i;
	var speed = 0.3;
	for (i=0;i<tabPlayer.player.length;i++){
		if(tabPlayer.player[i].id==thisPlayerId){
			break;
		}
	}

	if (Key.isDown(Key.UP)){
		tabPlayer.player[i].instanceInThree.position.y += speed;
	   	socket_CubeMove({id:thisPlayerId, location:tabPlayer.player[i].instanceInThree.position});
	}
	
	if (Key.isDown(Key.LEFT)){
	  	tabPlayer.player[i].instanceInThree.position.x -= speed;
	   	socket_CubeMove({id:thisPlayerId, location:tabPlayer.player[i].instanceInThree.position});
	}
	
	if (Key.isDown(Key.DOWN)){
		tabPlayer.player[i].instanceInThree.position.y -= speed;
	   	socket_CubeMove({id:thisPlayerId, location:tabPlayer.player[i].instanceInThree.position});
	}
	if (Key.isDown(Key.RIGHT)){
		tabPlayer.player[i].instanceInThree.position.x += speed;
	  	socket_CubeMove({id:thisPlayerId, location:tabPlayer.player[i].instanceInThree.position});
	}

	/*if(newPlayer==true)
	{
		socket_CubeMove({id:thisPlayerId, location:tabPlayer.player[i].instanceInThree.position});
		newPlayer=false;
	}*/
	
}

		
function sendPlayerPosition()
{
	var i;
	for (i=0;i<tabPlayer.player.length;i++){
		if(tabPlayer.player[i].id==thisPlayerId){
			break;
		}
	}
	socket_CubeMove({id:thisPlayerId, location:tabPlayer.player[i].instanceInThree.position});
}