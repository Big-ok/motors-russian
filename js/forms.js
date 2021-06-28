jQuery(document).ready(function($){

var sheight = $(window).height() - 245;
$('.panel.prod').css('height', sheight+'px');

// loading images in backgrounf
     var heroArray = [
     '/wp-content/themes/motor/img/l1h.png',
     '/wp-content/themes/motor/img/l2h.png',
     '/wp-content/themes/motor/img/l3h.png',
     '/wp-content/themes/motor/img/l4h.png',
     '/wp-content/themes/motor/img/l5h.png',
     '/wp-content/themes/motor/img/l6h.png',
     '/wp-content/themes/motor/img/feedbackh.png',
     '/wp-content/themes/motor/img/l7h.png',
     '/wp-content/themes/motor/img/fbbgh.png',
     '/wp-content/themes/motor/img/shbgh.png',
     '/wp-content/themes/motor/img/sendbgh.png',
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

// modal windows fos
    $('a#openform1').click( function(event){ 
            event.preventDefault(); 
            $('#overlay2').fadeIn(400, 
                function(){
                    $('#form1') 
                        .css('display', 'block')
                        .animate({opacity: 1}, 200);

            });
    });
        

    $('.modal_close_in, #overlay2').click( function(){ 
            $('#form1')
                .animate({opacity: 0}, 200,
                    function(){ 
                        $(this).css('display', 'none');
                        $('#overlay2').fadeOut(400); 
                    }
                );
    });


// modal windows save btn
    $('a#openform4').click( function(event){ 
            event.preventDefault(); 
            $('#overlay2').fadeIn(400, 
                function(){
                    $('#form4') 
                        .css('display', 'block')
                        .animate({opacity: 1}, 200);

            });
    });
        

    $('.modal_close_in, #overlay2').click( function(){ 
            $('#form4')
                .animate({opacity: 0}, 200,
                    function(){ 
                        $(this).css('display', 'none');
                        $('#overlay2').fadeOut(400); 
                    }
                );
    });











// фос
        jQuery('.fields_center .sbm_btt').click(function(e){
            e.preventDefault();
             jQuery('.fields_center input').css("border","1px solid  #00b4ff");
                var name = jQuery('.fields_center .f_name').val();
                var email = jQuery('.fields_center .f_email').val();            
                var phone = jQuery('.fields_center .f_phone').val();                
                email=jQuery('.f_email').val();
                var error='';
                var re = /[0-9a-z_]+@[0-9a-z_^.]+\.[a-z]{2,3}/i;
                
                if (name == "") {
                     jQuery('.fields_center .f_name').css("border","1px solid rgb(209, 42, 74)");
                     return false;
                }
                if (phone == "") {
                     jQuery('.fields_center .f_phone').css("border","1px solid rgb(209, 42, 74)");
                     return false;
                }


            jQuery.ajax ({ dataType: "text",
                complete:function(result){if (result="aa") 
                $('.sbm_btt.trans').fadeOut(400); 
                $('.thnx').delay(500).fadeIn(400); 
               },
                    url: "/sendform.php",
                    beforeSend: function ( xhr ) {       },
                    type: "POST",
                    data: {name: name, phone: phone, email: email, koform: $('#koform').serialize(), form:"form1"}, 
                    success: function (result) {                
                    
                    //window.location = "/wordpress/thankyoupage.html"
                    
                    }
            });
        });     // конец большой формы

});

