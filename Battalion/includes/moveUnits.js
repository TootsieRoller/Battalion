var allowed = true;
var scrolling = new Boolean();
var args = new Array(2);
var canvasHandler = document.getElementById('canvasHolder');
var hlightColour = 'rgba(245,239,173,.5)';
var targetLocationPath = [];
var uoiStats;
var totalMoves = 0;
canvasHandler.onmouseup = function(){scrolling = false;};
canvasHandler.onmousemove = function(event){
	if(!started)return;
	var x = event.layerX;
	var y = event.layerY;
	if(x>600||y>600)return;
	foreCanvas.clearRect(0,0,600,600);
	changeForMouse(x,y);
	if(!firstClick){
		var location = units.returnUnit(unitOfIntrest)['position'];
		with(foreCanvas){
			beginPath();
			moveTo(location[0]-mapDisp[0],location[1]-mapDisp[1]);
			lineTo(location[0]+tileSize-mapDisp[0],location[1]-mapDisp[1]);
			lineTo(location[0]+tileSize-mapDisp[0],location[1]+tileSize-mapDisp[1]);
			lineTo(location[0]-mapDisp[0],location[1]+tileSize-mapDisp[1]);
			fillStyle = hlightColour;
			fill();
		}
		if(x>=location[0]&&x<=location[0]+tileSize)
			if(y>=location[1]&&y<=location[1]+tileSize)return;
		targetLocationPath[totalMoves] = [];
		targetLocationPath[totalMoves][0] = x-x%tileSize;
		targetLocationPath[totalMoves][1] = y-y%tileSize;
		for(var i=0;i<=totalMoves&&i<uoiStats['movement'][0];i++){
			with(foreCanvas){
				beginPath();
				moveTo(targetLocationPath[i][0]-mapDisp[0],targetLocationPath[i][1]-mapDisp[1]);
				lineTo(targetLocationPath[i][0]+tileSize-mapDisp[0],targetLocationPath[i][1]-mapDisp[1]);
				lineTo(targetLocationPath[i][0]+tileSize-mapDisp[0],targetLocationPath[i][1]+tileSize-mapDisp[1]);
				lineTo(targetLocationPath[i][0]-mapDisp[0],targetLocationPath[i][1]+tileSize-mapDisp[1]);
				fillStyle = hlightColour;
				fill();
			}
		}
		if(x>=targetLocationPath[totalMoves][0]&&x<=targetLocationPath[totalMoves][0]+tileSize)
		if(y>=targetLocationPath[totalMoves][1]&&y<=targetLocationPath[totalMoves][1]+tileSize)return;
		totalMoves++;
		console.log(totalMoves);
	}
};

var changeForMouse = function(x,y){
	if(x>=585&&x<=600){
		scrolling = true;
		args = [0,10];
		with(foreCanvas){
			beginPath();
			moveTo(592.5,7.5);
			lineTo(592.5,592.5);
			strokeStyle = hlightColour;
			lineWidth = 15;
			stroke();
		}
	}else if(x<=15&&x>=0){
		scrolling = true;
		args = [0,-10];
		with(foreCanvas){
			beginPath();
			moveTo(7.5,592.5);
			lineTo(7.5,7.5);
			strokeStyle = hlightColour;
			lineWidth = 15;
			stroke();
		}
	}else if(y<=15&&y>=0){
		scrolling = true;
		args = [1,-10];
		with(foreCanvas){
			beginPath();
			moveTo(7.5,7.5);
			lineTo(592.5,7.5);
			strokeStyle = hlightColour;
			lineWidth = 15;
			stroke();
		}
	}else if(y>=585&&y<=600){
		scrolling = true;
		args = [1,10];
		with(foreCanvas){
			beginPath();
			moveTo(592.5,592.5);
			lineTo(7.5,592.5);
			strokeStyle = hlightColour;
			lineWidth = 15;
			stroke();
		}
	}else scrolling = false;
};

canvasHandler.onmousedown = function(){
	if(!started){
		var unit = units.returnAllUnits();
		for(i in unit)console.log(i,unit[i]['position']);
		return;
	}
	foreCanvas.clearRect(0,0,600,600);
	if(scrolling)movingMapPos(args[0],args[1]);
	else findUnitClicked(event.layerX+mapDisp[0],event.layerY+mapDisp[1]);
};

var movingMapPos = function(dir,amt){
	if(!scrolling)return;
	mapDisp[dir]+=amt;
	if(mapDisp[dir]<0)mapDisp[dir] = 0;
	var max = tileSize*levels.returnLevelLengths()[dir]-600;
	if(mapDisp[dir]>max)mapDisp[dir] = max;
	redrawLevel();
	setTimeout(function(){movingMapPos(dir,amt);},500/fps);
};

var findUnitClicked = function(x,y){
	allUnits = units.returnAllUnits();
	for(var i=0;i<allUnits.length;i++)
	if(x>=allUnits[i]['position'][0]&&x<=allUnits[i]['position'][0]+tileSize)
	if(y>=allUnits[i]['position'][1]&&y<=allUnits[i]['position'][1]+tileSize){
		unitOfIntrest = i;
		uoiStats = units.returnUnit(unitOfIntrest);
		if(uoiStats['notStationary']&&uoiStats['allowedMove'])firstClick = false;
		redrawStats();
		return;
	}
	if(firstClick){
		unitOfIntrest = null;
		x+=mapDisp[0];
		y+=mapDisp[1];
		uoiStats = data.grabMapLocation((x-x%tileSize)/tileSize,(y-y%tileSize)/tileSize);
	}else moveUnit(x,y);
	redrawStats();
};

var moveUnit = function(x,y){
	x-=x%tileSize;//x/=tileSize;
	y-=y%tileSize;//y/=tileSize;
	if(!allowed){
		console.log('nope');
		return;
	}
	allowed = false;
	firstClick = true;
	moving = setInterval(function(){smoothUnitMovement(unitOfIntrest,[x,y]);},1000/fps);
};

var firstI = true,
	moveInc = 15,
	direction,curPos;
function smoothUnitMovement(unit,location){
	curPos = units.returnUnit(unit)['position'];
	for(var i=0;i<2;i++){
		if(curPos[i]!=location[i]){
			if(firstI){
				firstI = false;
				if(curPos[i]<location[i]){
					if(i==0)units.editUnitData(unit,'facingNetural',true);
					direction = 1*moveInc;
				}else{
					if(i==0)units.editUnitData(unit,'facingNetural',false);
					direction = -1*moveInc;
				}
			}
	//		var destination = curPos[i]-direction;
	//			console.log('destination: '+destination);
			curPos[i] = curPos[i]+direction;
			units.editUnitData(unit,'position',curPos);
			return;
		}
		firstI = true;
	}
	firstClick = true;
	firstI = true;
	allowed = true;
	uoiStats['allowedMove'] = false;
	clearInterval(moving);
//	moving = setInterval(function(){move(0,[(xChange)?x+direction:x,(yChange)?y+direction:y])},1000/fps);
}

function attack(injured,meanie){
//	return 0;
}

function breath(){
	if(breathDir==1){	// breath in
		breathAmt-=breathInc;
		if(breathAmt<-breathMax)
			breathDir=-1;
	}else{  			// breath out
		breathAmt+=breathInc;
		if(breathAmt>breathMax)
			breathDir=1;
	}
}