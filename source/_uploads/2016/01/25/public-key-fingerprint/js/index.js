$(document).ready(function() {
    var codeFingerprintText = $('.fingerprint').text(),
        regexNumber = /(\d+)/g;

    $('.fingerprint').html(
        codeFingerprintText.replace(
            regexNumber,
            '<span class="number">$&</span>'
        )
    );
});