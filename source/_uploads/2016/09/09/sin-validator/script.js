'use strict';

function validate_sin(sin) {
    if (sin.length !== 9) {
        console.log('SIN number to short.');
        return false;
    }

    var c = 0;

    // odd digits
    for (var i = 1; i<=9; i+=2) {
        c += Number(sin.charAt(i-1));
    }

    // even digits
    for (var i = 2; i <=8; i+=2) {
    	var digit = Number(sin.charAt(i-1)) *2;
    	if (digit >9) {digit = digit -9}
    	c += digit;
    }

    if ((c % 10) == 0) {
        console.log('Valid SIN number.');
        return true;
    } else {
        console.log('Invalid SIN number.');
        return false;
    }
}

$("form").submit(function(event) {
    var sin1 = $("#sin-1").val(),
        sin2 = $("#sin-2").val(),
        sin3 = $("#sin-3").val(),
        valid_sin = validate_sin(sin1 + sin2 + sin3);

    if (valid_sin) {
        console.log('Show the success modal.');
        $("#successModal").modal('show');
        $("#errorModal").hide();
    } else {
        console.log('Show the error modal.');
        $("#errorModal").modal('show');
        $("#successModal").hide();
    }

    event.preventDefault();
});