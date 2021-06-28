jQuery(document).ready(function($){

// loading images in backgrounf
     var heroArray = [
     '/wp-content/themes/motor/img/l1h.png',
     '/wp-content/themes/motor/img/l2h.png',
     '/wp-content/themes/motor/img/l3h.png',
     '/wp-content/themes/motor/img/l4h.png',
     '/wp-content/themes/motor/img/l5h.png',
     '/wp-content/themes/motor/img/l6h.png',
     '/wp-content/themes/motor/img/feedbackh.png',
     '/wp-content/themes/motor/img/markh.png',
     '/wp-content/themes/motor/img/prsteph.png',     
     '/wp-content/themes/motor/img/l7h.png',
     '/wp-content/themes/motor/img/chooseh.png',
     '/wp-content/themes/motor/img/modelh.png',
     '/wp-content/themes/motor/img/l8h.png'
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

    $(".panel.home").css({"height":$(window).height()-260});
    var timer;
    $(window).resize(function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            $(".panel.home").css({"height":$(window).height()-260});
        },10);
    });


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




    function dontStartSelect() {
        return false;
    }

    function selection(on) {
        if (on) {
            $(document).on('selectstart', dontStartSelect);
        } else {
            $(document).off('selectstart', dontStartSelect);
        }
    }


    $(function(){
        $('#menu-mob').slicknav({
            label: '',
            appendTo:'.mmm-menu'
        });
    });


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


// off for mobile

    var width = $(window).width();

    if (width > 560) {
        $(".sect_cnt.inn").css({"height":$(window).height()-280});
        var timer;
        $(window).resize(function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                $(".sect_cnt.inn").css({"height":$(window).height()-280});
            },10);
        });


        $("#sc_wrapper").css({"height":$(window).height()-290});
        var timer;
        $(window).resize(function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                $("#sc_wrapper").css({"height":$(window).height()-290});
            },10);
        });

        var wrapper = document.getElementById('sc_wrapper'),
        scroller = document.getElementById('scroller'),
        container = document.getElementById('sc_container');

        if ($('#sc_container').height() <= $('.sect_cnt.inn.scroller').height()) {
            $('.scroller__bar-wrapper').css('display', 'none');
        } else {
            $('.scroller__bar-wrapper').css('display', 'block');
        }
    } 

    if (width >= 768 && width < 1024) {
        $("#sc_wrapper").css({"height":$(window).height()-320});
    } 

    if (width >= 560 && width < 768) {
        $("#sc_wrapper").css({"height":$(window).height()-320});
        $("#scroller").css({"height":$(window).height()-320});
    } 

});
