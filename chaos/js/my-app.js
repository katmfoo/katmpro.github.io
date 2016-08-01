// Initialize your app
var myApp = new Framework7({
	material: true
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

var currentTab = "1";

var chaosList = ["Chaos1",
				"Chaos2",
				"Chaos3",
				"Chaos4"];
				
				
var worldList = ["Time Stretch - Take 2 extra turns after this one.",
					"Musical Chairs - All players get up and move one seat in the direction the turns are proceeding, leaving their cards and life total for the player who takes their place.",
					"Trick or Treat - All cards from graveyards are returned to play if possible, or else (instants, sorceries, and Auras with nothing to enchant) they go to their owners' hands.",
					"Master of Chaos - Until your next turn, you choose all targets for all chaos rolls.",
					"Dibs - Until end of game, you own target card in any zone that's face up or revealed. If it's in play, you don't gain control of it, just ownership.",
					"Rainbow Vale - Put a Rainbow Vale land token into play. It has \"T: Add 1 mana of any color to your mana pool. Mana burn from mana produced this way causes you to lose 5 life.\" and \"At end of turn, if Rainbow Vale is untapped, you lose 5 life.\" and \"At the beginning of each player's turn, that player gains control of Rainbow Vale and untaps it.\"",
					"Musical Life - Each player passes their life total to the next player in the direction the turns are proceeding.",
					"Look at Me, I'm a Member of R&D - Either add 1 to all numbers on target permanent or subtract 1 from all numbers on that permanent.",
					"Turn Twister - Until your next turn, after each turn randomly choose who takes the next turn.",
					"Escape from AOL - Target land you control becomes AOL, loses its land types and abilities, and gains \"At the beginning of your upkeep, put a creature you control on AOL. Flip a coin. On heads, target player gains control of AOL. If a player destroys AOL, they gain control of all creatures on it.\"",
					"Flagbearer - Target creature gains \"If a spell or ability can target this creature, it must do so.\"",
					"Wrath of the Random - Destroy all permanents with a converted mana cost equal to 1d6.",
					"Chaos Ward - Target creature gains protection from chaos rolls.",
					"Fun Time - Roll on <EnchantWorldLand> replacing any existing rolls, and roll once on each of <WackyLand>, <PersonaLand>, and the chaos list.",
					"Time Wall Safe - Skip one of your phases this turn. Get a Safe counter, noting the skipped phase. Sacrifice a Safe counter at any time to take the skipped phase immediately (you're the active player for it).",
					"nruT - Go to your end phase and proceed backwards through the order of phases and steps. When you reach your Chaos phase, roll again on the chaos list. If there are 3 or more players, reverse the turn order from now on.",
					"Really Damn Wacky - Roll twice in <WackyLand> and 1d6 times on the chaos list.",
					"Ka-Ching!!$$ - Get a Black Lotus token, a Mox Pearl token, a Mox Sapphire token, a Mox Jet token, a Mox Ruby token, a Mox Emerald token, and a Mox Diamond token (without the drawback!)",
					"Time Crawl Jackpot! - Put a turn counter in the Time Crawl Jackpot. After this turn, you take an extra turn for each turn counter in the Time Crawl Jackpot. (There's already a counter in the jackpot at the start of the game.)"]

var personaLandList = ["PersonaList1",
						"PersonaList2",
						"PersonaList3",
						"PersonaList4"];
						
var wackyLandList = ["WackyLand1",
					"WackyLand2",
					"WackyLand3",
					"WackyLand4"];

$$('#tab1').on('show', function () {
    currentTab = "1";
});
 
$$('#tab2').on('show', function () {
    currentTab = "2";
});
 
$$('#tab3').on('show', function () {
    currentTab = "3";
});

$$('#tab4').on('show', function () {
    currentTab = "4";
});   

$$('.floating-button').on('click', function () {
    rollRandom();
});

function rollRandom() {
	var content = "";
	
	if (currentTab == 1) {
		content = chaosList[Math.floor(Math.random() * chaosList.length)];
	} else if (currentTab == 2) {
		content = worldList[Math.floor(Math.random() * worldList.length)];
	} else if (currentTab == 3) {
		content = personaLandList[Math.floor(Math.random() * personaLandList.length)];
	} else if (currentTab == 4) {
		content = wackyLandList[Math.floor(Math.random() * wackyLandList.length)];
	}
	
    document.getElementById('content' + currentTab).innerHTML = '<div class="card"><div class="card-content"><div class="card-content-inner">' + content + '</div></div></div>' + document.getElementById('content' + currentTab).innerHTML;
}