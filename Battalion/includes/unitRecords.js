function unitRecords(){
	var allUnits = [];
	var totalUnits = 0;
	var temp = new dataRecords();
	var data = new temp.unitClass();
	this.declare = function(unitType,location){
		var reused = false;
		for(i in allUnits)
		if(allUnits[i]['name']==unitType){
			reused = true;
			break;
		}
		allUnits[totalUnits] = new data.grabUnit(unitType);
		allUnits[totalUnits]['position'] = [location[0]*tileSize,location[1]*tileSize];
		allUnits[totalUnits]['allowedMove'] = true;
		allUnits[totalUnits]['facingNetural'] = true;
		if(!reused)images.declare(allUnits[totalUnits]['src']);
//		console.log('unit '+unitType+'\'s health = '+allUnits[totalUnits]['health']);
		totalUnits++;
	};
	this.returnAllUnits = function(){
		return allUnits;
	};
	this.returnUnit = function(x){
		return allUnits[x];
	};
	this.editUnitData = function(unitValue,dataLoc,updated){
		allUnits[unitValue][dataLoc] = updated;
		return allUnits[unitValue];
	};
}