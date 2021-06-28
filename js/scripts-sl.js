jQuery(document).ready(function($){
//sl5

    var left    = 0,
        top     = 0,
        sizes   = { retina: { width:140, height:140 },
                webpage:{ width:340, height:340} },
        webpage = $('#webpage'),
        offset  = { left: webpage.offset().left+5, top: webpage.offset().top-65 },
        retina  = $('#retina');

    if(navigator.userAgent.indexOf('Chrome')!=-1)
    {
        /*  Applying a special chrome curosor,
            as it fails to render completely blank curosrs. */

        retina.addClass('chrome');
    }

    webpage.mousemove(function(e){

        left = (e.pageX-offset.left);
        top = (e.pageY-offset.top);

        if(retina.is(':not(:animated):hidden')){
            /* Fixes a bug where the retina div is not shown */
            webpage.trigger('mouseenter');
        }

        if(left<0 || top<0 || left > sizes.webpage.width ||
            top > sizes.webpage.height)
        {
            /*  If we are out of the bondaries of the
                webpage screenshot, hide the retina div */

            if(!retina.is(':animated')){
                webpage.trigger('mouseleave');
            }
            return false;
        }

        /*  Moving the retina div with the mouse
            (and scrolling the background) */

        retina.css({
            left                : left - sizes.retina.width/2,
            top                 : top - sizes.retina.height/2,
            backgroundPosition  : '-'+(2*left)+'px -'+(2.5*top)+'px'
        });

    }).mouseleave(function(){
        retina.stop(true,true).fadeOut('fast');
    }).mouseenter(function(){
        retina.stop(true,true).fadeIn('fast');
    });


    // sl6

    document.drag = function(ev)
    {
      ev.dataTransfer.setData("text/html",ev.target.id);
    }

    document.allowDrop = function(ev)
    {
      ev.preventDefault();
    }

    document.drop = function(ev)
    {
      ev.preventDefault();
      var data=ev.dataTransfer.getData("text/html");
      var d=document.getElementById(data);
      ev.target.appendChild(d);
      d.style.top="10px";
      d.style.right="0px";
    }


    jQuery(".slider_cnt").mousemove(
            function(e){
          
                var offset = jQuery(this).offset();
                var xPos = e.pageX - offset.left;
                var mouseXPercent = Math.round(xPos / jQuery(this).width() * 25);

                jQuery(this).children('.mzd, .keys').each(
                    function(){
                      var diffX = jQuery('#Parallax').width() - jQuery(this).width();
                      var myX = diffX * (mouseXPercent / 1500);
                      var cssObj = {
                          'left': myX + 'px',
                        }
                        jQuery(this).animate({left: myX},{duration: 50, queue: false, easing: 'linear'});
                    }
                );

            }
        );

});

