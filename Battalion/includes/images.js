function imageConst(){
	var allImages = [];
	var resourcesLoaded = 0;
	var totalResources = 0;
	var firstTimer = true;
	this.declare = function(location){
		if(allImages[location])return;
		totalResources++;
		allImages[location] = new Image();
		allImages[location].src = './Images/' + location;
		allImages[location].onload = function(){
			resourcesLoaded++;
			if(gameInProgress){
				if(resourcesLoaded==totalResources){
					started = true;
					if(!firstTimer){
						firstTimer = false;
						alert('started too early!\nimages.js:19');
					}
					backCanvas.clearRect(0,0,canvas.width,canvas.height);
					redrawLevel();
					redrawAvatar();
					redrawStats();
					redrawUnit();
				}
			}
			allImages[location].onload = null;
		};
	};
	this.retrieve = function(path){
		return allImages[path];
	};
}