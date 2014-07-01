function initThree(){
	var zoom = 50;
	scene = new THREE.Scene();
	//camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
	camera = new THREE.OrthographicCamera(  (window.innerWidth / - 2)/zoom,  (window.innerWidth / 2)/zoom, (window.innerHeight / 2)/zoom, (window.innerHeight / - 2)/zoom, 0.1, 1000 );

	if (window.WebGLRenderingContext)
		renderer = new THREE.WebGLRenderer();
	else
		renderer = new THREE.CanvasRenderer();

	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	camera.position.z = 5;
	render();

}

function render() {

	requestAnimationFrame(render);
	TWEEN.update();
	if(gameReady == 1)
	{
		moveControlUpdate();
	}
	renderer.render(scene, camera);
}



function initAllPlayers(data){
	tabPlayer=data.PlayersJSON;
	geometry = new THREE.BoxGeometry(1,1,1);
		for (var i=0;i<tabPlayer.player.length;i++){
			tabPlayer.player[i]["instanceInThree"] =  new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:data.PlayersJSON.player[i].color}));
			scene.add(tabPlayer.player[i].instanceInThree);
			
		}
}



function moveOtherPlayers(data){
	returnMeshbyId(data.id).position=data.location;
}




function deletePlayer(data){
	scene.remove(returnMeshbyId(data.id))  // Remove player mesh in three
	tabPlayer.player.splice(returnIndexbyId(data.id),1); // Remove player in tabPlayer
}


function addPlayer(data){
	geometry = new THREE.BoxGeometry(1,1,1);
	material = new THREE.MeshBasicMaterial({color: data.color});
	tabPlayer.player.push({"id":data.id,"color":data.color ,"location":{"x":0,"y":0,"z":0},"instanceInThree":new THREE.Mesh(geometry, material)});
	scene.add(tabPlayer.player[tabPlayer.player.length-1].instanceInThree);
}





function returnMeshbyId(id)
{
	for (var i=0;i<=tabPlayer.player.length;i++){
		if(tabPlayer.player[i].id==id){
			return (tabPlayer.player[i].instanceInThree);
		}
	}	
}

function returnIndexbyId(id)
{
	var i;
	for (i=0;i<=tabPlayer.player.length;i++){
			if(tabPlayer.player[i].id==id){
					return (i);
				}
	}	

}