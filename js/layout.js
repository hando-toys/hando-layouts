$(document).ready(function(){
	resizeDiv();
});

window.onresize = function(event) {
	resizeDiv();
}

function resizeDiv() {
	vph = $(window).height();
	$('.product__gallery').height(vph);
}