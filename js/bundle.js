/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={773:()=>{document.addEventListener("DOMContentLoaded",(function(){[].forEach.call(document.querySelectorAll(".tel"),(function(e){var t;function n(e){e.keyCode&&(t=e.keyCode),this.selectionStart<3&&e.preventDefault();var n="+7 (___) ___ ____",a=0,i=n.replace(/\D/g,""),s=this.value.replace(/\D/g,""),o=n.replace(/[_\d]/g,(function(e){return a<s.length?s.charAt(a++)||i.charAt(a):e}));-1!=(a=o.indexOf("_"))&&(a<5&&(a=3),o=o.slice(0,a));var r=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(r=new RegExp("^"+r+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=o),"blur"==e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",n,!1),e.addEventListener("focus",n,!1),e.addEventListener("blur",n,!1),e.addEventListener("keydown",n,!1),e.addEventListener("click",(function(){if(e.setSelectionRange){var t=2*e.value.length;setTimeout((function(){e.setSelectionRange(t,t)}),1)}}))}))}));var e=document.querySelector("#form");e.addEventListener("submit",(function(t){t.preventDefault();for(var n=e.elements,a=0,i=0,s=0;s<n.length;s++){n[s].classList.value.indexOf("validate")+1&&(i++,n[s].parentElement.querySelector(".helper-text")&&(n[s].parentElement.classList.remove("error"),n[s].parentElement.querySelector(".helper-text").remove()),"checkbox"===n[s].type&&!1===n[s].checked?(n[s].parentElement.classList.add("error"),n[s].parentElement.insertAdjacentHTML("beforeend",'<span class="helper-text helper-checked">Вы должны согласится с условиями политики сайта, чтобы отправить форму</span>')):""===n[s].value?(n[s].parentElement.classList.add("error"),n[s].parentElement.insertAdjacentHTML("beforeend",'<span class="helper-text">Это поле обязательно для заполнения</span>')):a++)}var o=n.name.value,r=n.message.value,l=window.location.hostname;function c(){var t=document.querySelector(".popup__close");t.parentNode.parentNode.classList.remove("popup-open"),t.remove(),document.querySelector(".sending").remove(),e.removeAttribute("style"),e.reset()}a===i&&(e.style.display="none",e.insertAdjacentHTML("beforebegin",'<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>'),fetch("https://api.telegram.org/bot1801012612:AAHl0LxzdBxyCtpQSVmVmGQ3T4dqHhAx49U/sendMessage?chat_id=-584993655&text=Сообщение с сайта: "+l+", от пользователя: "+o+", тел: "+r).then((function(e){return e.status>=400?Promise.reject():e.json()})).then((function(t){t.ok&&(document.querySelector(".preloader-wrapper").remove(),e.insertAdjacentHTML("beforebegin",'<div class="sending">Спасибо, ваше сообщение отправлено!</div>'),setTimeout(c,1e3))})).catch((function(){return console.log("ошибка")})))}))},205:()=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}!function(t,n){function a(e,n){this.element=e,this.settings=t.extend({},i,n),this._defaults=i,this._name=s,this.init()}var i={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!1,removeClasses:!1,brand:"",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},s="slicknav",o="slicknav";a.prototype.init=function(){var e,a,i=this,s=t(this.element),r=this.settings;if(r.duplicate?(i.mobileNav=s.clone(),i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each((function(e,n){t(n).removeAttr("id")}))):(i.mobileNav=s,i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each((function(e,n){t(n).removeAttr("id")}))),r.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each((function(e,n){t(n).removeAttr("class")}))),e=o+"_icon",""===r.label&&(e+=" "+o+"_no-text"),"a"==r.parentTag&&(r.parentTag='a href="#"'),i.mobileNav.attr("class",o+"_nav"),a=t('<div class="'+o+'_menu"></div>'),""!==r.brand){var l=t('<div class="'+o+'_brand">'+r.brand+"</div>");t(a).append(l)}i.btn=t(["<"+r.parentTag+' aria-haspopup="true" tabindex="0" class="'+o+"_btn "+o+'_collapsed">','<span class="'+o+'_menutxt">'+r.label+"</span>",'<span class="'+e+'">','<span class="'+o+'_icon-bar"></span>','<span class="'+o+'_icon-bar"></span>','<span class="'+o+'_icon-bar"></span>',"</span>","</"+r.parentTag+">"].join("")),t(a).append(i.btn),""!==r.appendTo?t(r.appendTo).append(a):t(r.prependTo).prepend(a),a.append(i.mobileNav);var c=i.mobileNav.find("li");t(c).each((function(){var e=t(this),n={};if(n.children=e.children("ul").attr("role","menu"),e.data("menu",n),n.children.length>0){var a=e.contents(),s=!1,l=[];t(a).each((function(){return!t(this).is("ul")&&(l.push(this),void(t(this).is("a")&&(s=!0)))}));var c=t("<"+r.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+o+'_item"/>');if(r.allowParentLinks&&!r.nestedParentLinks&&s)t(l).wrapAll('<span class="'+o+"_parent-link "+o+'_row"/>').parent();else t(l).wrapAll(c).parent().addClass(o+"_row");e.addClass(r.showChildren?o+"_open":o+"_collapsed"),e.addClass(o+"_parent");var d=t('<span class="'+o+'_arrow">'+(r.showChildren?r.openedSymbol:r.closedSymbol)+"</span>");r.allowParentLinks&&!r.nestedParentLinks&&s&&(d=d.wrap(c).parent()),t(l).last().after(d)}else 0===e.children().length&&e.addClass(o+"_txtnode");e.children("a").attr("role","menuitem").click((function(e){r.closeOnClick&&!t(e.target).parent().closest("li").hasClass(o+"_parent")&&t(i.btn).click()})),r.closeOnClick&&r.allowParentLinks&&(e.children("a").children("a").click((function(){t(i.btn).click()})),e.find("."+o+"_parent-link a:not(."+o+"_item)").click((function(){t(i.btn).click()})))})),t(c).each((function(){var e=t(this).data("menu");r.showChildren||i._visibilityToggle(e.children,null,!1,null,!0)})),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),t(n).mousedown((function(){i._outlines(!1)})),t(n).keyup((function(){i._outlines(!0)})),t(i.btn).click((function(e){e.preventDefault(),i._menuToggle()})),i.mobileNav.on("click","."+o+"_item",(function(e){e.preventDefault(),i._itemClick(t(this))})),t(i.btn).keydown((function(e){13==(e||event).keyCode&&(e.preventDefault(),i._menuToggle())})),i.mobileNav.on("keydown","."+o+"_item",(function(e){13==(e||event).keyCode&&(e.preventDefault(),i._itemClick(t(e.target)))})),r.allowParentLinks&&r.nestedParentLinks&&t("."+o+"_item a").click((function(e){e.stopImmediatePropagation()}))},a.prototype._menuToggle=function(){var e=this,t=e.btn,n=e.mobileNav;t.hasClass(o+"_collapsed")?(t.removeClass(o+"_collapsed"),t.addClass(o+"_open")):(t.removeClass(o+"_open"),t.addClass(o+"_collapsed")),t.addClass(o+"_animating"),e._visibilityToggle(n,t.parent(),!0,t)},a.prototype._itemClick=function(e){var t=this,n=t.settings,a=e.data("menu");a||((a={}).arrow=e.children("."+o+"_arrow"),a.ul=e.next("ul"),a.parent=e.parent(),a.parent.hasClass(o+"_parent-link")&&(a.parent=e.parent().parent(),a.ul=e.parent().next("ul")),e.data("menu",a)),a.parent.hasClass(o+"_collapsed")?(a.arrow.html(n.openedSymbol),a.parent.removeClass(o+"_collapsed"),a.parent.addClass(o+"_open"),a.parent.addClass(o+"_animating"),t._visibilityToggle(a.ul,a.parent,!0,e)):(a.arrow.html(n.closedSymbol),a.parent.addClass(o+"_collapsed"),a.parent.removeClass(o+"_open"),a.parent.addClass(o+"_animating"),t._visibilityToggle(a.ul,a.parent,!0,e))},a.prototype._visibilityToggle=function(e,n,a,i,s){var r=this,l=r.settings,c=r._getActionItems(e),d=0;a&&(d=l.duration),e.hasClass(o+"_hidden")?(e.removeClass(o+"_hidden"),s||l.beforeOpen(i),e.slideDown(d,l.easingOpen,(function(){t(i).removeClass(o+"_animating"),t(n).removeClass(o+"_animating"),s||l.afterOpen(i)})),e.attr("aria-hidden","false"),c.attr("tabindex","0"),r._setVisAttr(e,!1)):(e.addClass(o+"_hidden"),s||l.beforeClose(i),e.slideUp(d,this.settings.easingClose,(function(){e.attr("aria-hidden","true"),c.attr("tabindex","-1"),r._setVisAttr(e,!0),e.hide(),t(i).removeClass(o+"_animating"),t(n).removeClass(o+"_animating"),s?"init"==i&&l.init():l.afterClose(i)})))},a.prototype._setVisAttr=function(e,n){var a=this;e.children("li").children("ul").not("."+o+"_hidden").each(n?function(){var e=t(this);e.attr("aria-hidden","true"),a._getActionItems(e).attr("tabindex","-1"),a._setVisAttr(e,n)}:function(){var e=t(this);e.attr("aria-hidden","false"),a._getActionItems(e).attr("tabindex","0"),a._setVisAttr(e,n)})},a.prototype._getActionItems=function(e){var t=e.data("menu");if(!t){t={};var n=e.children("li"),a=n.find("a");t.links=a.add(n.find("."+o+"_item")),e.data("menu",t)}return t.links},a.prototype._outlines=function(e){e?t("."+o+"_item, ."+o+"_btn").css("outline",""):t("."+o+"_item, ."+o+"_btn").css("outline","none")},a.prototype.toggle=function(){this._menuToggle()},a.prototype.open=function(){this.btn.hasClass(o+"_collapsed")&&this._menuToggle()},a.prototype.close=function(){this.btn.hasClass(o+"_open")&&this._menuToggle()},t.fn[s]=function(n){var i,o=arguments;return void 0===n||"object"==e(n)?this.each((function(){t.data(this,"plugin_"+s)||t.data(this,"plugin_"+s,new a(this,n))})):"string"==typeof n&&"_"!==n[0]&&"init"!==n?(this.each((function(){var e=t.data(this,"plugin_"+s);e instanceof a&&"function"==typeof e[n]&&(i=e[n].apply(e,Array.prototype.slice.call(o,1)))})),void 0!==i?i:this):void 0}}(jQuery,document,window)},520:()=>{var e;(e=jQuery).fn.smSlider=function(t){return t=e.extend({namespace:"sm",start:0,transition:"animate",activeClass:"active",autoArr:!0,innerBlock:"sm_slider-inner",prev:"sm_prev",next:"sm_next",children:"sm_slide",pagination:!0,typeCtrl:"dots",subMenu:!1,subMenuClass:"sm_submenu-item",autoPlay:!1,delay:5e3,hoverPause:!0,easing:"swing",duration:600,flexible:!1,animationStart:function(){},animationComplete:function(){}},t),this.each((function(){var n=!0,a=function(a,i){if(!n)return!1;n=!1;var s=-1*o;"next"==i?(currPos=s,nextPos=o):(currPos=o,nextPos=s),"fader"!=t.transition?(l.children("."+t.children+"."+t.activeClass).stop().animate({left:currPos},{duration:t.duration,easing:t.easing,complete:function(){e(this).removeClass(t.activeClass),t.animationComplete&&t.animationComplete(a)}}),c.eq(a).css("left",nextPos).addClass(t.activeClass).stop().animate({left:0},{duration:t.duration,easing:t.easing,complete:function(){n=!0}})):(l.children("."+t.children+"."+t.activeClass).stop().fadeOut({duration:t.duration,easing:t.easing,complete:function(){e(this).removeClass(t.activeClass),t.animationComplete&&t.animationComplete(a)}}),c.eq(a).stop().fadeIn({duration:t.duration,easing:t.easing,complete:function(){n=!0}}).addClass(t.activeClass)),t.animationStart&&t.animationStart(a),t.pagination&&(f.removeClass(t.activeClass),f.eq(a).addClass(t.activeClass)),t.subMenu&&(g.removeClass(t.activeClass),g.eq(a).addClass(t.activeClass))},s=e(this),o=s.width(),r=s.height();t.flexible&&e(window).resize((function(){o=s.width()}));var l=s.children("ul").addClass(t.innerBlock);l.css({height:r,overflow:"hidden",position:"relative",width:"100%"});var c=l.children("li").addClass(t.children),d=c.length;if(t.start>d-1)var p=d-1;else p=t.start;if(c.appendTo(l),c.eq(p).addClass(t.activeClass),d>1){var u=e("<i/>");if(t.autoArr){var m=u.clone().addClass(t.prev),h=u.clone().addClass(t.next);m.appendTo(s),h.appendTo(s)}else m=e("."+t.prev),h=e("."+t.next);if(t.pagination){var v=e("<ul/>").addClass("sm_nav"),f=e("<li/>");if(v.appendTo(s),"numeric"!=t.typeCtrl)for(i=d;i>0;i--)f.clone().data({index:i-1}).addClass("sm_nav-item").html(u.clone()).prependTo(v);else for(i=d;i>0;i--)f.clone().data({index:i-1}).addClass("sm_nav-item").text(i).prependTo(v);(f=s.find(".sm_nav-item")).eq(p).addClass(t.activeClass)}if(t.subMenu){var g=e("."+t.subMenuClass);g.eq(p).addClass(t.activeClass)}if(t.autoPlay){var _=null,b=function(){++p>=d&&(p=0),a(p,"next")};_=setInterval(b,t.delay),t.hoverPause&&e(this).hover((function(){_=clearInterval(_)}),(function(){_=setInterval(b,t.delay)}))}m.on("click",(function(){n&&(--p<0&&(p=d-1),a(p,"prev"))})),h.on("click",(function(){n&&(++p>=d&&(p=0),a(p,"next"))})),t.pagination&&f.on("click",(function(){n&&(navIndex=e(this).data("index"),navIndex>p?direction="next":direction="prev",e(this).data("index")!=p&&(p=navIndex,a(p,direction)))})),t.subMenu&&g.on("click",(function(){n&&(subIndex=e(this).data("index"),subIndex>p?direction="next":direction="prev",subIndex!=p&&subIndex<=d-1&&(p=subIndex,a(p,direction)))}))}}))}},39:()=>{document.addEventListener("click",(function(e){if(e.target.classList.contains("popup-show")){e.preventDefault();var t=document.getElementById(e.target.getAttribute("data-popup"));t.querySelector(".popup").insertAdjacentHTML("afterbegin",'<a class="popup__close" href="#"></a>'),t.classList.add("popup-open")}else if(e.target.classList.contains("popup__close")){e.preventDefault();var n=e.target.parentElement.parentElement,a=n.querySelector(".popup__close");n.classList.remove("popup-open"),a.remove()}}))},850:()=>{jQuery(document).ready((function(e){var t=0,n=0,a={width:140,height:140},i={width:340,height:340},s=e("#webpage"),o=s.offset().left+5,r=s.offset().top-65,l=e("#retina");-1!=navigator.userAgent.indexOf("Chrome")&&l.addClass("chrome"),s.mousemove((function(e){if(t=e.pageX-o,n=e.pageY-r,l.is(":not(:animated):hidden")&&s.trigger("mouseenter"),t<0||n<0||t>i.width||n>i.height)return l.is(":animated")||s.trigger("mouseleave"),!1;l.css({left:t-a.width/2,top:n-a.height/2,backgroundPosition:"-"+2*t+"px -"+2.5*n+"px"})})).mouseleave((function(){l.stop(!0,!0).fadeOut("fast")})).mouseenter((function(){l.stop(!0,!0).fadeIn("fast")})),document.drag=function(e){e.dataTransfer.setData("text/html",e.target.id)},document.allowDrop=function(e){e.preventDefault()},document.drop=function(e){e.preventDefault();var t=e.dataTransfer.getData("text/html"),n=document.getElementById(t);e.target.appendChild(n),n.style.top="10px",n.style.right="0px"},jQuery(".slider_cnt").mousemove((function(e){var t=jQuery(this).offset(),n=e.pageX-t.left,a=Math.round(n/jQuery(this).width()*25);jQuery(this).children(".mzd, .keys").each((function(){var e=(jQuery("#Parallax").width()-jQuery(this).width())*(a/1500);jQuery(this).animate({left:e},{duration:50,queue:!1,easing:"linear"})}))}))}))},230:()=>{jQuery(document).ready((function(e){var t=["/wp-content/themes/motor/img/pekh.png","/wp-content/themes/motor/img/enh.png","/wp-content/themes/motor/img/kith.png","/wp-content/themes/motor/img/sberh.png","/wp-content/themes/motor/img/l5h.png","/wp-content/themes/motor/img/l6h.png","/wp-content/themes/motor/img/feedbackh.png","/wp-content/themes/motor/img/markh.png","/wp-content/themes/motor/img/prsteph.png","/wp-content/themes/motor/img/nalh.png","/wp-content/themes/motor/img/chooseh.png","/wp-content/themes/motor/img/modelh.png","/wp-content/themes/motor/img/l8h.png","/wp-content/themes/motor/img/beznalh.png","/wp-content/themes/motor/img/dlh.png"];e(window).load((function(){e.each(t,(function(){(new Image).src=this}))}));var n=e("#overlay"),a=e(".open_modal"),i=e(".modal_close, #overlay"),s=e(".modal_div");function o(){s.animate({opacity:0,top:"45%"},400,(function(){e(this).css("display","none"),n.fadeOut(400)}))}a.click((function(t){t.preventDefault();var a=e(this).attr("href"),i=e(".modal_div").height()/2;n.fadeIn(400,(function(){e(a).css("display","block").css("margin-top",-i+"px").animate({opacity:1,top:"50%"},200)}))})),i.click((function(){s.animate({opacity:0,top:"45%"},200,(function(){e(this).css("display","none"),n.fadeOut(400)}))})),e(".type_eng").on("click",(function(t){t.preventDefault(),e(".step1_comb, .step1_kpp, .choose_comb, .choose_kpp").fadeOut(400).css("display","none"),e(".step1_eng, .choose_eng").fadeIn(400).css("display","inline-block"),o()})),e(".type_comb").on("click",(function(t){t.preventDefault(),e(".step1_eng, .step1_kpp, .choose_eng, .choose_kpp").fadeOut(400).css("display","none"),e(".step1_comb, .choose_comb").fadeIn(400).css("display","inline-block"),o()})),e(".type_kpp").on("click",(function(t){t.preventDefault(),e(".step1_comb, .step1_eng, .choose_eng, .choose_comb").fadeOut(400).css("display","none"),e(".step1_kpp, .choose_kpp").fadeIn(400).css("display","inline-block"),o()}));var r=e(window).width();r<=560&&e(".panel.slider").css({height:e(window).height()-220}),r>=640&&r<768&&e(".panel.slider").css({height:e(window).height()-285}),e((function(){e("#menu-mob").slicknav({label:"",appendTo:".mmm-menu"})}))}))},136:()=>{$(document).ready((function(){$("#sm_slider").smSlider({autoPlay:!0,transition:"fader",autoArr:!0,hoverPause:!0})}))}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(230),n(850),n(520),n(205),n(39),n(773),n(136)})()})();
//# sourceMappingURL=bundle.js.map