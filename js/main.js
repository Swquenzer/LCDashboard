$(document).ready(function() {
	$('.hover.panel').click(function(){
			$(this).toggleClass('flip');
	}); /*,function(){
			$(this).removeClass('flip');
	});*/

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
});