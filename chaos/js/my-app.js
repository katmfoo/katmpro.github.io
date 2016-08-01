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

var worldList = ["EnchantWorld1",
						"EnchantWorld2",
						"EnchantWorld3",
						"EnchantWorld4"];

var personalList = ["PersonaList1",
						"PersonaList2",
						"PersonaList3",
						"PersonaList4"];
						
var wackyList = ["WackyLand1",
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
		content = personalList[Math.floor(Math.random() * personalList.length)];
	} else if (currentTab == 4) {
		content = wackyList[Math.floor(Math.random() * wackyList.length)];
	}
	
    document.getElementById('content' + currentTab).innerHTML = '<div class="card"><div class="card-content"><div class="card-content-inner">' + content + '</div></div></div>' + document.getElementById('content' + currentTab).innerHTML;
}