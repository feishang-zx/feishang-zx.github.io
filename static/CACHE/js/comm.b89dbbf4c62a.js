;!function(o){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=o,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t){var o,r,a,u;function n(){try{if(o)return;adsbygoogle.loaded?($(window).trigger("resize"),o=1,clearTimeout()):setTimeout(n,200)}catch(e){console.log(e)}}function i(){$(".lazy").each(function(){var e=$(window).scrollTop(),t=$(window).height(),o=$(this).offset().top-30;o+($(this).height()+30)<e||e<o-t||!$(this).attr("src")&&$(this).attr("data-srcset")&&$(this).attr("src",$(this).attr("data-srcset"))})}function c(){180==window.orientation||window.orientation,90==window.orientation||window.orientation,$(window).trigger("resize")}function s(e,t,o,n){if($(e).length){var i=$(window).width()-10;for(0<o&&(i=o),old_w=$(e).width(),i!=old_w&&$(e).width(i),GamesPerRow=0<t?t:1600<=i?10:1200<i?8:800<i?6:600<=i?4:300<=i?3:2,TheThumbWidth=parseInt(i/GamesPerRow)-10,TheThumbHeight=parseInt(TheThumbWidth*thumbRatio);TheThumbHeight>($(window).height()-50)/2;)GamesPerRow+=1,TheThumbWidth=parseInt(i/GamesPerRow)-10,TheThumbHeight=parseInt(TheThumbWidth);r=TheThumbWidth,a=TheThumbHeight,u=GamesPerRow,d(e,GamesPerRow,n)}}function d(e,t,o){objs=$(e+" .thumb").not(e+" .AdBox"),objs.css({width:r+"px",height:a+"px"}),$(e+" .thumb-featured").css({width:2*r+10+"px",height:2*a+10+"px"});try{$(e+" .AdBox").css("width",(r+10)*u+"px")}catch(e){}var n=$(e);n.isotope({layoutMode:"packery",columnWidth:r+10,itemSelector:".thumb"}),o&&(nums=objs.length,rem=nums%t,lines=(nums-rem)/t,n.css("height",lines*(a+10)+"px")),i()}$(document).ready(function(){n(),$(window).trigger("resize"),$(window).scroll(function(){i(),200<$(window).scrollTop()?$("#backToTop").fadeIn():$("#backToTop").fadeOut()}),window.addEventListener("onorientationchange"in window?"orientationchange":"resize",c,!1),$("#backToTop").click(function(){$("html,body").animate({scrollTop:0},350)}),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(function(e){e.forEach(function(e){e&&e.unregister()})}).catch();var e=new MutationObserver(function(e){e.forEach(function(e){"0px 0px 0px 0px"!==$("body").css("padding")&&$("body").css("padding","0px 0px 0px 0px")})}),t=document.getElementsByTagName("body")[0];e.observe(t,{attributes:!0,attributeFilter:["style"]})}),$(window).resize(function(){i(),s(".allgames",gamesPerRow||0,0,!1)}),top.location!=location&&(top.location.href=document.location.href),window.DoCaculateThumbSize=s,window.DoUpdateThumbSize=d,window.GamesPerRow=u,window.togglemenu=function(){$("#menu").toggle()},window.togglesearch=function(){$("#searchDiv").toggle()}}]);;var LoadedGamesNum=34;;!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(e,o,t){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(o,e){if(1&e&&(o=r(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var n in o)r.d(t,n,function(e){return o[e]}.bind(null,n));return t},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s=5)}({5:function(e,o){var t=!1,n=0,r=0;function a(o){t=!0,n=(new Date).getTime(),$(window).scrollTop($(window).scrollTop()+40),url="/game/more/"+LoadedGamesNum+"-"+(LoadedGamesNum+o),$.ajax({async:!0,url:url,success:function(e){"NoData"==e?LoadedGamesNum=1e3:($(window).scrollTop($(window).scrollTop()-40),$msg=$(e),$(".allgames").append($msg).isotope("appended",$msg),DoUpdateThumbSize(".allgames",0,!1)),LoadedGamesNum+=o},complete:function(e,o){!function(){i&&i&&clearTimeout(i);i&&(new Date).getTime()-r<200&&clearTimeout(i);i=setTimeout(c,200)}()}})}var i=null;function c(){n=(new Date).getTime()-400,t=!1}$(function(){var o=!1;$(window).scroll(function(){if(!o&&100<window.scrollY){o=!0,window.cookieconsent_options={message:"This website uses cookies to ensure you get the best experience on our website",dismiss:"Got it!",learnMore:"More info",link:"/privacy",target:"_blank"};var e=document.createElement("script");e.type="text/javascript",e.src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.10/cookieconsent.min.js",document.body.append(e)}})}),top.location!=location&&(top.location.href=document.location.href),window.TryToLoadMoreGames=function(){var e=!0,o=(new Date).getTime();(r=o)-n<1e3&&(e=!1),1e3<=LoadedGamesNum&&(e=!1),t&&(e=!1),e&&(t=!0,lacks=(GamesPerRow-$(".allgames .thumb").not(".allgames .AdBox").length%GamesPerRow)%GamesPerRow,a(8*GamesPerRow+lacks))}}});