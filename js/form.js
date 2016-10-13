/*global $*/
$(function () {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/galinasale@gmail.com", 
            method: "POST",
            data: {
                userName: $('#name').val(),
                email: $('#email').val(),
                text: $('#msg').val() 
            },
            dataType: "json"
        }).done(function() {
            $('#usrform').html('<h1>Thank you!</h1>')
        }).fail(function(xhr, err) {
            $('#usrform').html(xhr.statusText);
        });        
    })
});