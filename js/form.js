/*global $*/
$(function() {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/galinasale@gmail.com",
            method: "POST",
            data: {
                firstname: $('#firstname').val(),
                secondname: $('#secondname').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h4><center>Thank you for reaching out! </br> Your message has been successfully sent.</center></h4>')
        }).fail(function(xhr, err) {
           // $('form').html(xhr.statusText);
           $('#send').hide();
        $('.warrning').show(function() {
            $('#firstname, #secondname, #email, #message').on('focus', function() {
                $('.warrning').hide();
                $('#send').show();
            });
        });
        $('form,').trigger("reset");
    });
});
});
/*function empty() {
    var x;
    x = document.getElementById("firstname").value;
    if (x == "") {
        alert("Enter a field");
        return false;
    };
}*/