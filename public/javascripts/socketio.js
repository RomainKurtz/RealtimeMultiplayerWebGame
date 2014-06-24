function initSocket(){

	//socket = io('http://92.154.124.59');
	socket = io('http://localhost');
	
	socket.on('connection', function(socket){
	  console.log('socket connection')
	});

	socket.on('restartBrowser', function(){
		console.log('reloader request')
	    window.LiveReload.reloader.reloadPage();
	});

	socket.on('PlayersMove', function(data){
		moveOtherPlayers(data);
	});

	socket.on('NewPlayer', function(data){
		console.log('New player')
		sendPlayerPosition();
		addPlayer(data);
	});

	socket.on('PlayerQuit', function(data){
		console.log('Player quit')
		deletePlayer(data);
	});
	socket.on('RespondTabPlayer', function(data){
		tabPlayer=data;
		initAllPlayers();
	});
	socket.on('PlayerConf', function(data){
		thisPlayerId=data.playerId;
		document.title = thisPlayerId;

		initAllPlayers(data);
		gameReady = 1;
	});
	

}

function socket_CubeMove(param){
		socket.emit('request_CubeMove',param);
}