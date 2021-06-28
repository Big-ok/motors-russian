jQuery(document).ready(function($){

// loading images in backgrounf
     var heroArray = [
     '/wp-content/themes/motor/img/pekh.png',
     '/wp-content/themes/motor/img/enh.png',
     '/wp-content/themes/motor/img/kith.png',
     '/wp-content/themes/motor/img/sberh.png',
     '/wp-content/themes/motor/img/l5h.png',
     '/wp-content/themes/motor/img/l6h.png',
     '/wp-content/themes/motor/img/feedbackh.png',
     '/wp-content/themes/motor/img/markh.png',
     '/wp-content/themes/motor/img/prsteph.png',     
     '/wp-content/themes/motor/img/nalh.png',
     '/wp-content/themes/motor/img/chooseh.png',
     '/wp-content/themes/motor/img/modelh.png',
     '/wp-content/themes/motor/img/l8h.png',
     '/wp-content/themes/motor/img/beznalh.png',
     '/wp-content/themes/motor/img/dlh.png'
     ]

    function preCacheHeros(){
        $.each(heroArray, function(){
            var img = new Image();
            img.src = this;
        });
    };

     $(window).load(function(){
        preCacheHeros();
    });

// auto-height of scroll-sections
    // $(".panel.slider").css({"height":$(window).height()-230});
    // var timer;
    // $(window).resize(function() {
    //     clearTimeout(timer);
    //     timer = setTimeout(function() {
    //         $(".panel.slider").css({"height":$(window).height()-230});
    //     },40);
    // });

    // $(".panel.home").css({"height":$(window).height()-325});
    // var timer;
    // $(window).resize(function() {
    //     clearTimeout(timer);
    //     timer = setTimeout(function() {
    //         $(".panel.home").css({"height":$(window).height()-325});
    //     },40);
    // });

// modal windows
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');

    open_modal.click( function(event){ 
        event.preventDefault(); 
        var div = $(this).attr('href');
        var h = $('.modal_div').height(); // высота окна
        var k = h/2; 
        overlay.fadeIn(400,
            function(){ 
                 $(div) 
                     .css('display', 'block') 
                     .css("margin-top", -k+"px") 
                     .animate({opacity: 1, top: '50%'}, 200); 
         });
     });

    close.click( function(){
            modal
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); 
                 }
             );
     });

    function close_modal(){
            modal
             .animate({opacity: 0, top: '45%'}, 400,
                 function(){
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); 
                 }
             );
    }

    $('.type_eng').on('click', function(event) { 
        event.preventDefault(); 
        $('.step1_comb, .step1_kpp, .choose_comb, .choose_kpp').fadeOut(400).css('display', 'none');
        $('.step1_eng, .choose_eng').fadeIn(400).css('display', 'inline-block');
        close_modal();
    });

    $('.type_comb').on('click', function(event) { 
        event.preventDefault(); 
        $('.step1_eng, .step1_kpp, .choose_eng, .choose_kpp').fadeOut(400).css('display', 'none');
        $('.step1_comb, .choose_comb').fadeIn(400).css('display', 'inline-block');
        close_modal();
    });

    $('.type_kpp').on('click', function(event) { 
        event.preventDefault(); 
        $('.step1_comb, .step1_eng, .choose_eng, .choose_comb').fadeOut(400).css('display', 'none');
        $('.step1_kpp, .choose_kpp').fadeIn(400).css('display', 'inline-block');
        close_modal();
    });

    var width = $(window).width();

    if (width <= 560) {
        $(".panel.slider").css({"height":$(window).height()-220});
    }

    if (width >= 640 && width < 768) {
        $(".panel.slider").css({"height":$(window).height()-285});
    }

    $(function(){
        $('#menu-mob').slicknav({
            label: '',
            appendTo:'.mmm-menu'
        });
    });
    

});

