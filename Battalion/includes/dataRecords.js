function dataRecords(){
	var title,imageDirectory;

	this.unitClass = function(){
		var units = [];
		imageDirectory  = 'Units/';

		title = 'Strike Commando';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [40,'light'];
		units[title]['damage'] = [28,'light'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [3,'foot'];
		units[title]['cost'] = 75;
		units[title]['modifiers'] = function(){
			data.mods.capture(unit);
			data.mods.tracking;
		};
		title = 'Heavy Commando';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [40,'light'];
		units[title]['damage'] = [35,'light'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [3,'foot'];
		units[title]['cost'] = 100;
		units[title]['modifiers'] = function(){
			data.mods.capture(unit);
			data.mods.tracking;
		};
		title = 'Jammer Truck';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [50,'light'];
		units[title]['damage'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [5,'wheels'];
		units[title]['cost'] = 300;
		units[title]['modifiers'] = function(){
			data.mods.radar;
			data.mods.jamming;
		};
		title = 'Mortar Truck';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [50,'light'];
		units[title]['damage'] = [48,'med'];
		units[title]['ranged'] = true;
		units[title]['range'] = [2,5];
		units[title]['movement'] = [5,'wheels'];
		units[title]['cost'] = 285;
		units[title]['modifiers'] = function(){
			data.mods.counterRange;
		};
		title = 'Rocket Truck';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [40,'light'];
		units[title]['damage'] = [40,'hev'];
		units[title]['ranged'] = true;
		units[title]['range'] = [3,5];
		units[title]['movement'] = [4,'wheels'];
		units[title]['cost'] = 470;
		units[title]['modifiers'] = function(){
			data.mods.counterRange;
		};
		title = 'Flak Tank';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [70,'med'];
		units[title]['damage'] = [17,'light'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [5,'wheels'];
		units[title]['cost'] = 240;
		units[title]['modifiers'] = function(){
			data.mods.airRaid;
		};
		title = 'Scorpion Tank';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [70,'med'];
		units[title]['damage'] = [35,'med'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [6,'wheels'];
		units[title]['cost'] = 270;
		units[title]['modifiers'] = function(){
			data.mods.fastAttack;
		};
		title = 'Stealth Tank';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [40,'med'];
		units[title]['damage'] = [30,'light'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [5,'wheels'];
		units[title]['cost'] = 340;
		units[title]['modifiers'] = function(){
			data.mods.cloak;
		};
		title = 'Spider Tank';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [70,'med'];
		units[title]['damage'] = [55,'med'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [4,'wheels'];
		units[title]['cost'] = 250;
		units[title]['modifiers'] = function(){
			data.mods.mountinClimber;
		};
		title = 'Lancer Tank';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [70,'med'];
		units[title]['damage'] = [35,'light'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [6,'wheels'];
		units[title]['cost'] = 270;
		units[title]['modifiers'] = function(){
			data.mods.lancer;
		};
		title = 'Annihilator Tank';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [140,'hev'];
		units[title]['damage'] = [70,'hev'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [4,'wheels'];
		units[title]['cost'] = 525;
		units[title]['modifiers'] = function(){
			data.mods.slowAttack;
		};
		title = 'Warmachine';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [75,'med'];
		units[title]['damage'] = [60,'hev'];
		units[title]['ranged'] = true;
		units[title]['range'] = [2,3];
		units[title]['movement'] = [3,'wheels'];
		units[title]['cost'];
		units[title]['modifiers'] = function(){
			data.mods.minner;
			data.mods.builder;
		};
		title = 'Blockade';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = false;
		units[title]['health'] = [70,'med'];
		units[title]['damage'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [0,'stuck'];
		units[title]['cost'];
		units[title]['modifiers'] = function(){
			data.mods.minner;
			data.mods.builder;
		};
		title = 'Turret';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = false;
		units[title]['health'] = [100,'med'];
		units[title]['damage'] = [40,'med'];
		units[title]['ranged'] = true;
		units[title]['range'] = [2,5];
		units[title]['movement'] = [0,'stuck'];
		units[title]['cost'];
		units[title]['modifiers'] = function(){
			data.mods.minner;
			data.mods.builder;
		};
			// air units
		title = 'Raptor Fighter';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [50,'light'];
		units[title]['damage'] = [25,'light'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [8,'air'];
		units[title]['cost'] = 135;
		units[title]['modifiers'] = function(){
			data.mods.irrepairable;
			data.mods.airRaid;
		};
		title = 'Condor Bomber';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [72,'med'];
		units[title]['damage'] = [70,'hev'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [4,'air'];
		units[title]['cost'] = 600;

		title = 'Vulture Drone';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [55,'med'];
		units[title]['damage'] = [30,'med'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [5,'air'];
		units[title]['cost'] = 550;
		units[title]['modifiers'] = function(){
			data.mods.vulture;
		};
		title = 'Raptor Fighter';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [50,'light'];
		units[title]['damage'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [6,'air'];
		units[title]['cost'];
		units[title]['modifiers'] = function(){
			data.mods.transporter;
		};
			// sea units
		title = 'Intrepid';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [50,'light'];
		units[title]['damage'] = [15,'light'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [6,'sea'];
		units[title]['cost'] = 200;
		units[title]['modifiers'] = function(){
			data.mods.capture;
			data.mods.tracking;
		};
		title = 'Hunter Support';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [90,'med'];
		units[title]['damage'] = [17,'light'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [5,'sea'];
		units[title]['cost'] = 450;
		units[title]['modifiers'] = function(){
			data.mods.airRaid;
			data.mods.flak;
		};
		title = 'Corvette';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [90,'med'];
		units[title]['damage'] = [45,'med'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [5,'sea'];
		units[title]['cost'] = 500;
		units[title]['modifiers'] = function(){
			data.mods.fastAttack;
		};
		title = 'Battlecruiser';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [140,'hev'];
		units[title]['damage'] = [50,'hev'];
		units[title]['ranged'] = true;
		units[title]['range'] = [2,6];
		units[title]['movement'] = [4,'sea'];
		units[title]['cost'] = 800;

		title = 'U-Boat';
		units[title] = [];
		units[title]['name'] = title;
		units[title]['src'] = imageDirectory+title+'.png';
		units[title]['notStationary'] = true;
		units[title]['health'] = [25,'light'];
		units[title]['damage'] = [35,'hev'];
		units[title]['ranged'] = false;
		units[title]['movement'] = [4,'sea'];
		units[title]['cost'] = 475;
		units[title]['modifiers'] = function(){
			data.mods.cloak;
		};

		this.grabUnit = function(name){
			return units[name];
		}
	};

	this.buildingClass = function(){
		var buildings = [];
		title = 'Command Center';
		buildings[title] = [];
		buildings[title]['name'] = title;
		buildings[title]['src'] = imageDirectory+title+'.png';
		buildings[title]['health'] = 100;
		buildings[title]['defense'] = .5;
		buildings[title]['damage'] = 10;
		buildings[title]['modifiers'] = function(){
			var allOrNothing = function(){
	//			game is lost if player loses this building
			};
		};
		title = 'Command Center';
		buildings[title] = [];
		buildings[title]['name'] = title;
		buildings[title]['src'] = imageDirectory+title+'.png';
		buildings[title]['health'] = 100;
		buildings[title]['defense'] = .5;
		buildings[title]['modifiers'] = function(){
			var allOrNothing = function(){
	//			game is lost if player loses this building
			};
			var respite = function(){
	//			units of same colour on this space gain 10 hp
			};
		};
		title = 'Warfactory';
		buildings[title] = [];
		buildings[title]['name'] = title;
		buildings[title]['src'] = imageDirectory+title+'.png';
		buildings[title]['health'] = 100;
		buildings[title]['defense'] = .3;
		buildings[title]['modifiers'] = function(){
			var builders = function(){
	//			units can be built here
			};
		};
		title = 'Ground Control';
		buildings[title] = [];
		buildings[title]['name'] = title;
		buildings[title]['src'] = imageDirectory+title+'.png';
		buildings[title]['health'] = 100;
		buildings[title]['defense'] = .2;
		buildings[title]['modifiers'] = function(){
			var groundAccess = function(){
	//			ground access is permitted, if(amt>1)15% discount grpund units
			};
		};
		title = 'Air Control';
		buildings[title] = [];
		buildings[title]['name'] = title;
		buildings[title]['src'] = imageDirectory+title+'.png';
		buildings[title]['health'] = 100;
		buildings[title]['defense'] = .2;
		buildings[title]['modifiers'] = function(){
			var airAccess = function(){
	//			air access is permitted, if(amt>1)15% discount air units
			};
		};
		title = 'Sea Control';
		buildings[title] = [];
		buildings[title]['name'] = title;
		buildings[title]['src'] = imageDirectory+title+'.png';
		buildings[title]['health'] = 100;
		buildings[title]['defense'] = .2;
		buildings[title]['modifiers'] = function(){
			var seaAccess = function(){
	//			sea access is permitted, if(amt>1)15% discount sea units
			};
		};
		title = 'Oil Refinary';
		buildings[title] = [];
		buildings[title]['name'] = title;
		buildings[title]['src'] = imageDirectory+title+'.png';
		buildings[title]['health'] = 100;
		buildings[title]['defense'] = .1;
		buildings[title]['modifiers'] = function(){
			var income = function(){
	//			player who owns this building gains $60 per turn
			};
		};
		title = 'Oil Rig';
		buildings[title] = [];
		buildings[title]['name'] = title;
		buildings[title]['src'] = imageDirectory+title+'.png';
		buildings[title]['health'] = 100;
		buildings[title]['defense'] = .1;
		buildings[title]['modifiers'] = function(){
			var hotIncome = function(){
	//			player who owns this building gains $240 per turn
			};
		};
		title = 'Advanced Oil Refinary';
		buildings[title] = [];
		buildings[title]['name'] = title;
		buildings[title]['src'] = imageDirectory+title+'.png';
		buildings[title]['health'] = 100;
		buildings[title]['defense'] = .4;
		buildings[title]['modifiers'] = function(){
			var hotIncome = function(){
	//			player who owns this building gains $240 per turn
			};
		};
		this.grabBuilding = function(name){
			return buildings[name];
		}
	};

	this.mapClass = function(){
		imageDirectory = 'Terrain/';
		var terrains = [],
			i = 0,
			curMap;
		title = 'Plains';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Dirty';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = .1;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 1;
		terrains[i++] = terrains[title];

		title = 'Canyon';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Smooth';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = -.2;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 1;
		terrains[i++] = terrains[title];

		title = 'Wasteland';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Rugged';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = .5;
		terrains[title]['damage'] = -20;
		terrains[title]['drag'] = 1;
		terrains[i++] = terrains[title];

		title = 'Forest';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Rugged';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = .2;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 2;
		terrains[i++] = terrains[title];

		title = 'Ore Deposit';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Clean';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = 0;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 1;
		terrains[i++] = terrains[title];

		title = 'Enriched Ore Deposit';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Clean';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = 0;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 1;
		terrains[i++] = terrains[title];

		title = 'Depleted Ore Deposit';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Clean';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = 0;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 1;
		terrains[i++] = terrains[title];

		title = 'Hill';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Rugged';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = .2;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 2;
		terrains[i++] = terrains[title];

		title = 'Mountain';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Jagged';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = .4;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 3;
		terrains[i++] = terrains[title];

		title = 'Road';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Clean';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = 0;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 1;
		terrains[i++] = terrains[title];

		title = 'Sea';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Sea';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = 0;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 1;
		terrains[i++] = terrains[title];

		title = 'Archipelago';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Sea';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = .2;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 2;
		terrains[i++] = terrains[title];

		title = 'Rock Formation';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Sea';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = .7;
		terrains[title]['damage'] = -20;
		terrains[title]['drag'] = 2;
		terrains[i++] = terrains[title];

		title = 'Reef';
		terrains[title] = [];
		terrains[title]['name'] = title;
		terrains[title]['type'] = 'Sea';
		terrains[title]['src'] = imageDirectory+title+'.png';
		terrains[title]['defense'] = .1;
		terrains[title]['damage'] = 0;
		terrains[title]['drag'] = 2;
		terrains[i++] = terrains[title];

		this.declareMap = function(x){
			curMap = x;
			for(var i=0;i<curMap.length;i++)
			for(var j=0;j<curMap[i].length;j++)
			images.declare(terrains[curMap[i][j]]['src']);
		}
		this.grabMapLocation = function(x,y){
			if(started)return terrains[curMap[x][y]];
			else console.error('Not started');
		}
	};

	var mods = function(){
		this.capture = function(unit){
//			if(unit==building){
//				buildings[buildingsrcation.name][health]-=10;
//			}
		};
		this.tracking = function(){
//			if(unitMovingTo==stealthTanksrca){
//				attack(this.unit,sealthedTank.unit);
		};
		this.radar = function(unit){
//			detects stealthed units at start of turn
		};
		this.jamming = function(){
//			no planes and uncloaks stealth units
		};
		this.counterRange = function(){
//			can counter ranged attacks
		};
		this.airRaid = function(){
//			can attack air units
		};
		this.bombard = function(){
//			can attack sea units
		};
		this.lancer = function(){
//			can attack area directly behind unit attacked when init attack
		};
		this.flak = function(){
//			deals 2x damage to light units
		};
		this.cloak = function(){
//			can use cloak if not by enemy unit at end of turn
		};
		this.mountinClimber = function(){
//			can climb rough terrain (ground units only)
		};
		this.irrepairable = function(){
//			cannot repaire unit--better look for a heal zone
		};
		this.transporter = function(){
//			can move other units
		};
		this.vulture = function(){
//			can move again if it kills an emeny unit
		};
		this.fastAttack = function(){
//			20% more damage if it inits attack
		};
		this.slowAttack = function(){
//			15% less damage on counter attack
		};
		this.builder = function(){
//			can build other units
//			cannot both build and attack per turn
		};
		this.minner = function(){
//			can mine ore
		};
	};
}