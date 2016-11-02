$(document).ready(function(){


	// Button

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