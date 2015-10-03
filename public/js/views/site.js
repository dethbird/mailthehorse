$(window).ready(function(){
    // window resize
    $(window).resize($.debounce(350, function(e){
      if ($(window).width() >= 992) {
        $('section iframe.youtube').attr('width', 560);
        $('section iframe.youtube').attr('height', 315);
      } else if ($(window).width() >= 768 && $(window).width() < 992) {
        $('section iframe.youtube').attr('width', 450);
        $('section iframe.youtube').attr('height', 253);
      } else if ($(window).width() < 768) {
        $('section iframe.youtube').attr('width', 350);
        $('section iframe.youtube').attr('height', 197);
      }
    }));
    $(window).trigger('resize');

    //newsletter form
    $('#newsletter_form').submit(function(e){
        e.preventDefault();
        $.post(
          '/newsletter',
          {
            email: $('#newsletter_form input[type=email]').val()
          }
        ).success(function(data){
          $('#newsletter_form input').hide();
          $('#newsletter_form button').hide();
          $('#newsletter_form label').html(data.email + " subscribed!");
        });

    });

    $('#contact_form').submit(function(e){
        e.preventDefault();
        $('#contact_form div.form-group').removeClass('has-error');
        $.post(
          '/contact',
          {
            first_name: $('#contact_form input#first_name').val(),
            last_name: $('#contact_form input#last_name').val(),
            email: $('#contact_form input#email').val(),
            message: $('#contact_form textarea#message').val()
          }
        ).success(function(data){
          $('#contact_form').html("Your message has been sent!");
        }).error(function(jqXHR, data){
          $.each(jqXHR.responseJSON, function(i,error){
            $('#contact_form #' + error.field).parent('div.form-group').addClass('has-error');
          });
        });

    });
});