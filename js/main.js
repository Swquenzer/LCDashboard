$(document).ready(function() {
	$('.hover.panel').click(function(){
			$(this).toggleClass('flip');
	}); /*,function(){
			$(this).removeClass('flip');
	});*/

	//Initialize Wellness Plan
	wellnessInit();
});
/************************************
** Wellness Plan 
*************************************/
//view 1 := Goals View
//view 2 := Action Items View
//view 3 := Goal Details
//View 4 := Action Item Details
var options = {
	view: 1, //default view
	prevView: 1 //default
};
function changeView(newView) {
	var getURL = "";
	var target = "";
	//Generate new view
	switch(newView) {
		case 1:
			//Goals Overview
			getURL = "start-new-goal.html";
			target = $("#start-new .wellness-items");
			break;
		case 2:
			//Action Items Overview
			getURL = "start-new-actionitem.html";
			target = $("#start-new .wellness-items");
			break;
		case 3:
			//Goal Details
			getURL = "goal-details.html";
			target = $("#wellness-plan");
			break;
		case 4:
			//Action Item Details
			break;
	}
	//Change View
	options.prevView = options.view;
	options.view = newView;
	$.get(getURL, function(data) {
		target.hide().append(data).fadeIn(400);
	});
}
//Select an in-progress goal
$('#in-progress').on("click", "tr", function() {
	//We are either in view 1 or 2 at this point
	changeView(3);
});
//Select a start-new Goal Item or Action Item
$('#start-new').on("click", "tr", function() {
	if(options.view === 1) changeView(3);
	//else if(options.view === 2) changeView(4);
});
//Click the AI/Goals button
//Swap start new Action Items/Goals
$('#wellness-plan-sidebar').on("click", function() {
	$('#start-new .wellness-items').empty();
	if(options.view === 1) changeView(2);
	else if(options.view === 2) changeView(1);
});
//Hide details panel
$('body').on("click", ":not(>.details)", function() {
	$('.details').fadeOut(300);
	options.view = 1; //previous view?
});

/*
* Initialize Wellness Plan
*/
function wellnessInit() {
	var nanooptions = {
			target: document.getElementById('newgoal-1'),
			bg: '#e6dd83'
		};
		var nanobar = new Nanobar(nanooptions);
		nanobar.go(50);
		nanooptions.target = document.getElementById('newgoal-2');
		var nanobar2 = new Nanobar(nanooptions);
		nanobar2.go(80);
		nanooptions.target = document.getElementById('newgoal-3');
		var nanobar3 = new Nanobar(nanooptions);
		nanobar3.go(20);
}