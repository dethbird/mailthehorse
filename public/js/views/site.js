$(window).ready(function(){
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
});