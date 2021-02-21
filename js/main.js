$(document).ready(function() {
    $('.menuBar').click(function() {
        $('.menuBar').toggleClass('active')
        $('header nav ul').toggleClass('active')
    })
});