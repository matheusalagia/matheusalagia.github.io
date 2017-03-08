// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict


//scroll
$(window).on("load scroll",function(){
    
    var st = $(window).scrollTop();
    
    //cycle
    if ($("#bottom").length>0) {
        if (!slider_iniciado) {
            var slider_ponto = $("#bottom").offset().top - $("#bottom").outerHeight() + 250;
            //console.log(st +' ' +slider_ponto);
            if (st>slider_ponto) {
                $("#bottom .slides").cycle('resume');
                //var html = $("#bottom1 .iphone").html();
                //$("#bottom1 .iphone").html("");
                //$("#bottom1 .iphone").html(html);
                var src = $("#bottom1 .iphone .frame").attr("src");
                $("#bottom1 .iphone .frame").attr("src",src);
                $("#bottom .slides").on("cycle-before",function(event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
                    var $frame = $(incomingSlideEl).find(".iphone .frame");
                    var src = $frame.attr("src");
                    $frame.attr("src",src);
                });
                slider_iniciado = true;
            }
        }
    }
    
    
});