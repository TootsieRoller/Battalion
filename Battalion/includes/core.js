function initiateCanvas(name){
	var element = document.getElementById(name),
		canvas = document.createElement('canvas');
	canvas.setAttribute('width',element.style.width);
	canvas.setAttribute('height',element.style.height);
	element.appendChild(canvas);
	if(typeof G_vmlCanvasManager!='undefined')
		canvas = G_vmlCanvasManager.initElement(canvas);
	return canvas.getContext('2d');
}
var canvasConst = function(){
	this.height = 650;
	this.width = 810;
};
var canvas;
var backCanvas;
var levelCanvas;
var unitCanvas;
var foreCanvas;
var statsCanvas;
var avatarCanvas;
var	fps = 30,
	lastLoop = new Date,
	mapDisp = [0,0],
	sfx = false,
	Interval = [],
	images,
	units,
	tileSize = 60,
	breathInc = .1,
	breathDir = 1,
	breathAmt = 0,
	breathMax = 1,
	firstClick = true,
	moving = false,
	unitOfIntrest,
	greyBackground = false,
	started = false,
	gameInProgress = false,
	speedAdjustmentUp = false,
	dataRecordsClass,data,levels;
window.onload = function(){
	backCanvas = initiateCanvas('backCanvas');
	levelCanvas = initiateCanvas('levelCanvas');
	unitCanvas = initiateCanvas('unitCanvas');
	foreCanvas = initiateCanvas('foreCanvas');
	statsCanvas = initiateCanvas('statsCanvas');
	avatarCanvas = initiateCanvas('avatarCanvas');
	canvas = new canvasConst();
	images = new imageConst();
	units = new unitRecords();
	dataRecordsClass = new dataRecords();
	data = new dataRecordsClass.mapClass();
	levels = new levelDesigns();
	mainMenu();
	updateThings(1000/fps);
	units.declare('Flak Tank',[5,5]);
//	units.declare('Strike Commando',[5,3]);
//	units.declare('Strike Commando',[4,4]);
	units.declare('Condor Bomber',[2,2]);
	units.declare('Annihilator Tank',[3,3]);
	units.declare('Blockade',[4,4]);
	for(var i=0;i<units.returnAllUnits().length;i++){
		var superTemp = units.returnUnit(i);
		console.log('['+superTemp['health']+'] is the health of unit '+superTemp['name']);
	}
};

function updateThings(rate){
	var thisLoop = new Date;
	var frameRate = document.getElementById('frames');
	var _fps = Math.round(1000/(thisLoop-lastLoop));
	frameRate.innerHTML=_fps.toString() + '/' + fps.toString() + ' FPS';
	lastLoop = thisLoop;
	if(_fps<10)
		frameRate.style.color = '#f00';
	else if(_fps<20)
		frameRate.style.color = '#909310';
	else
		frameRate.style.color = '#12790b';
	setTimeout(function(){updateThings(1000/fps);},rate);
}function redrawLevel(){
	if(!started)return;
	with(levelCanvas){
		clearRect(0,0,canvas.width,canvas.height);
		var lengths = 2;
		var level = levels.returnLevelLengths();
		for(var i=0;i<level[0]*tileSize;i+=tileSize)
		for(var x=0;x<level[1]*tileSize;x+=tileSize){
			var temp = data.grabMapLocation(i/tileSize,x/tileSize);
			drawImage(images.retrieve(temp['src']),i-mapDisp[0],x-mapDisp[1]);
			beginPath();
			moveTo(i-mapDisp[0],x-mapDisp[1]);
			lineTo(i-mapDisp[0]+tileSize,x-mapDisp[1]);
			lineTo(i-mapDisp[0]+tileSize,x-mapDisp[1]+tileSize);
			lineTo(i-mapDisp[0],x-mapDisp[1]+tileSize);
			lineWidth = 1;
			strokeStyle = '#000';
			stroke();
		}
	}
}function redrawAvatar(){
	if(!started)return;
	with(avatarCanvas){
		clearRect(0,0,canvas.width,canvas.height);
		beginPath();
		moveTo(0,0);
		lineTo(210,0);
		lineTo(210,600);
		lineTo(0,600);
		fillStyle = '#77a8bc';
		fill();
	}
}function redrawStats(){
	if(!started)return;
	with(statsCanvas){
		clearRect(0,0,canvas.width,canvas.height);
		beginPath();
		moveTo(0,0);
		lineTo(600,0);
		lineTo(600,60);
		lineTo(0,60);
		fillStyle = '#f00';
		fill();
	}
	if(uoiStats==null)return;
	var x = 70,i=0;
	with(statsCanvas){
		fillStyle = '#000';
		font = '10px';
		if(uoiStats['health']){
			for(name in uoiStats){
				if(name!='src'&&name!='facingNetural'&&name!='cost'&&name!='modifiers'&&name!='notStationary'&&name!='position'){
					fillText(name+': '+uoiStats[name],x,10+i*22.5);
					if(++i>=3){x+=150;i=0;}
				}
			}
		}else{
			fillText('Type: '+uoiStats['type'],70,10);
			fillText('Defense: '+uoiStats['defense']*100+'%',70,32.5);
			fillText('Damage: '+uoiStats['damage'],70,55);
		}
	}
	statsCanvas.drawImage(images.retrieve(uoiStats['src']),0,0);
}function redrawUnit(){
	if(!started)return;
	unitCanvas.clearRect(0,0,canvas.width,canvas.height);
	var unit = units.returnAllUnits();
	for(i in unit){
//		console.error(i,unit[i]['position']);
		var X = unit[i]['position'][0] - mapDisp[0];
		var Y = unit[i]['position'][1] - mapDisp[1];
		if(!unit[i]['facingNetural']){
			unitCanvas.save();
			unitCanvas.translate(images.retrieve(unit[i]['src']).width,0);
			unitCanvas.scale(-1,1);
			X*=-1;
		}
		var breaths = (unit[i]['notStationary'])?breathAmt:0;
		unitCanvas.drawImage(images.retrieve(unit[i]['src']),X,Y-breaths);
		if(!unit[i]['allowedMove'])
		with(unitCanvas){
			lineWidth = 5;
			strokeStyle = '#000';
			beginPath();
			moveTo(X,Y);
			lineTo(X+tileSize,Y+tileSize);
			stroke();
			beginPath();
			moveTo(X+tileSize,Y);
			lineTo(X,Y+tileSize);
			stroke();
		}
		if(!unit[i]['facingNetural'])
			unitCanvas.restore();
	}
	if(greyBackground)
	with(unitCanvas){
		beginPath();
		moveTo(0,0);
		lineTo(600,0);
		lineTo(600,600);
		lineTo(0,600);
		fillStyle = 'rgba(127,127,127,.7)';
		fill();
	}
	setTimeout(function(){redrawUnit();},1000/fps);
}

var starters = getElementsByClass('levelIcon','li');
for(var i=0;i<starters.length;i++){
	starters[i].onclick = function(){
		start(this.id.split('+'));
	};
}
function start(string){
	gameInProgress = true;
	var level = string[0],
		colours = new Array();
	for(var i=1;i<string.length;i++)
		colours[i] = string[i];
	document.getElementById('levelSelect').style.display = 'none';
	document.getElementById('mainMenu').style.display = 'none';
	document.getElementById('endTurnBtn').style.display = 'block';
	Interval['breath'] = setInterval(breath,2000/fps);
	if(level=='rand'){
		var randomLevelDesign = new Array(10);
		for(var i=0;i<randomLevelDesign.length;i++){
			randomLevelDesign[i] = new Array(10);
			for(var x=0;x<randomLevelDesign.length;x++)
				randomLevelDesign[i][x] = Math.floor(Math.random()*100)%14;
		}
		data.declareMap(randomLevelDesign);
	}else data.declareMap(levels.returnLevel(parseInt(level)));
	unitOfIntrest = null;
}

function mainMenu(){
	if(started){
		var ask=confirm('Are you sure?');if(!ask)return;
		if(Interval['move']!=null)
			clearInterval(Interval['move']);
		clearInterval(Interval['breath']);
		emyNum = 0;
		enemy = null;
		mapDisp[0] = 0;
		moving = false;
		started = false;
		gameInProgress = false;
	}
	backCanvas.clearRect(0,0,canvas.width,canvas.height);
	levelCanvas.clearRect(0,0,canvas.width,canvas.height);
	unitCanvas.clearRect(0,0,canvas.width,canvas.height);
	statsCanvas.clearRect(0,0,canvas.width,canvas.height);
	avatarCanvas.clearRect(0,0,canvas.width,canvas.height);
	backCanvas.fillStyle = '#77a8bc';
	backCanvas.fillRect(0,0,810,650);
	document.getElementById('mainMenu').style.display = 'block';
	document.getElementById('start').style.display = 'block';
	document.getElementById('levelEdit').style.display = 'block';
	document.getElementById('optionsBttn').style.display = 'block';
	document.getElementById('creditsBttn').style.display = 'block';
	document.getElementById('endTurnBtn').style.display = 'none';
}

function endTurn(){
	with(foreCanvas){
		beginPath();
		moveTo(50,200);
		lineTo(550,200);
		lineTo(550,400);
		lineTo(50,400);
		fillStyle = hlightColour;
		fill();
	}
	var setAllowed = function(){
		allUnits = units.returnAllUnits();
		for(var i=0;i<allUnits.length;i++)
			allUnits[i]['allowedMove'] = true;
		foreCanvas.clearRect(50,200,550,400);
	};
	haltPlaying(1000,setAllowed);
}

function haltPlaying(time,returnFunction){
	greyBackground = true;
	var temp = [canvasHandler.onmousedown,canvasHandler.onmousemove,canvasHandler.onmouseup];
	canvasHandler.onmousedown = null;
	canvasHandler.onmousemove = null;
	canvasHandler.onmouseup = null;
	setTimeout(function(){
		canvasHandler.onmousedown = temp[0];
		canvasHandler.onmousemove = temp[1];
		canvasHandler.onmouseup = temp[2];
		greyBackground = false;
		if(returnFunction!=null)returnFunction();
	},time);
}

function displaySpeed(e){
	if(!speedAdjustmentUp){
		speedAdjustmentUp = true;
		displayNext(e);
	}
	else{
		speedAdjustmentUp = false;
		do{
			e = e.nextSibling;
		}while(e&&e.nodeType!=1);
		e.style.display = 'none';
	}
}

function getElementsByClass(searchClass,tag,node){
	if(tag==null)
		tag = '*';
	if(node==null)
		node = document;
	var classElements = new Array();
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	for(i=0,j=0;i<elsLen;i++){
		if(pattern.test(els[i].className)){
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}

function sfxToggle(button){
	if(sfx){
		button.innerHTML = 'SFX Off';
		sfx = false;
	}
	else{
		button.innerHTML = 'SFX On';
		sfx = true;
	}
}

function displayNext(e){
	document.getElementById('start').style.display = 'none';
	document.getElementById('levelEdit').style.display = 'none';
	document.getElementById('optionsBttn').style.display = 'none';
	document.getElementById('creditsBttn').style.display = 'none';
	do{
		e = e.nextSibling;
	}
	while(e&&e.nodeType!=1);
	e.style.display = 'block';
}

function backNav(x){
	x.style.display = 'none';
	document.getElementById('start').style.display = 'block';
	document.getElementById('levelEdit').style.display = 'block';
	document.getElementById('optionsBttn').style.display = 'block';
	document.getElementById('creditsBttn').style.display = 'block';
}

document.getElementById('gameLogo').onclick = function(){
	var arr = (location.href).split('//');
	window.location = arr[1];
};