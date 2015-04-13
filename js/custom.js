$(document).ready(function() {	
	var clicked = true;
$('.nav navbar-nav navbar-right > li:last-child').click(function(){
	if (clicked == true) {
		$('.searchbar').css('display', 'inline-block');
		clicked = false;
	} else {
		$('.searchbar').css('display', 'none');
		clicked = true;
	}
});