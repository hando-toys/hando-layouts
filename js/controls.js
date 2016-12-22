$(document).ready(function() {

    $('.toggle--collections').click(function(){
        console.log('clicked');
        $(this).toggleClass('active');
        var target = $('.list--collections');
        $(target).toggleClass('visible');
    });

    // Quantity
	//$('#qty__input').focus();
	$('#qty__spinner--up').click(function(){
        var $qty=$('#qty__input');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('#qty__spinner--down').click(function(){
        var $qty=$('#qty__input');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });


});