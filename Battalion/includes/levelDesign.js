function levelDesigns(){
	var level = new Array(3),
		levelNum=0,
		curLevel=-1;

	level[levelNum] = [];
	for(var x=0;x<10;x++)
		level[levelNum][x] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];

	level[++levelNum] = [];
	var xDim = 0;
	level[levelNum][xDim++] = [10,10,10,10,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [0,0,10,0,0,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [0,0,10,0,0,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [10,10,10,10,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [10,10,10,10,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [10,0,10,0,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [10,0,10,0,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [10,0,0,0,10,0,0,0,0,10,0,0,0];
	level[levelNum][xDim++] = [0,0,0,0,0,0,0,0,0,0,10,0,0];
	level[levelNum][xDim++] = [10,10,10,10,10,0,10,10,10,0,0,10,0];
	level[levelNum][xDim++] = [0,0,0,0,10,0,0,0,0,0,0,10,0];
	level[levelNum][xDim++] = [0,0,0,0,10,0,0,0,0,0,0,10,0];
	level[levelNum][xDim++] = [0,0,0,0,10,0,10,10,10,0,0,10,0];
	level[levelNum][xDim++] = [0,0,0,0,0,0,0,0,0,0,10,0,0];
	level[levelNum][xDim++] = [10,10,10,10,10,0,0,0,0,10,0,0,0];
	level[levelNum][xDim++] = [0,0,0,0,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [0,0,0,0,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [0,0,0,0,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [10,10,10,10,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [10,0,0,0,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [10,0,0,0,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [10,10,10,10,10,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	level[levelNum][xDim++] = [10,10,10,0,10,0,0,0,0,0,0,0,0];
	
	level[++levelNum] = [];
	for(var x=0;x<10;x++)
		level[levelNum][x] = [0,0,0,0,0,0,0,0,0,0];

	this.returnLevel = function(x){
		curLevel = x;
		return level[x];
	}
	this.returnLevelLengths = function(){
		if(level[curLevel])return [level[curLevel].length,level[curLevel][0].length];
		else return [10,10];
	}
}