/* global $*/
 $(function() {
     $('#send').click(function(e) {
          e.preventDefault();
        if (($('#firstname').val() == '') ||
            ($('#email').val() == '')) {
            alert('Please fill in all required fields!');
            return;
         $.ajax({
             url: "https://formspree.io/galinasale@gmail.com",
             method: "POST",
             data: {
                 name: $('#firstname').val(),
                 email: $('#email').val(),
                 text: $('#message').val()
             },
             dataType: "json"
         }).done(function() {
             $('form').html('<h1>Thank you!</h1>')
         }).fail(function(xhr, err) {
             $('form').html(xhr.statusText);
         });
     })
 });
