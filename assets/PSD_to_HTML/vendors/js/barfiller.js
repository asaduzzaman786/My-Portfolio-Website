!function(f){f.fn.barfiller=function(t){var i,o,n=f.extend({barColor:"#16b597",tooltip:!0,duration:1e3,animateOnResize:!0,symbol:"%"},t),e=f(this),a=f.extend(n,t),r=e.width(),s=e.find(".fill"),l=e.find(".tip"),u=s.attr("data-percentage"),d=!1,c={init:function(){return this.each(function(){c.getTransitionSupport()&&(d=!0,o=c.getTransitionPrefix()),c.appendHTML(),c.setEventHandlers(),c.initializeItems()})},appendHTML:function(){s.css("background",a.barColor),a.tooltip||l.css("display","none"),l.text(u+a.symbol)},setEventHandlers:function(){a.animateOnResize&&f(window).on("resize",function(t){clearTimeout(i),i=setTimeout(function(){c.refill()},300)})},initializeItems:function(){var t=c.calculateFill(u);e.find(".tipWrap").css({display:"inline"}),d?c.transitionFill(t):c.animateFill(t)},getTransitionSupport:function(){var t=(document.body||document.documentElement).style;return void 0!==t.transition||void 0!==t.WebkitTransition||void 0!==t.MozTransition||void 0!==t.MsTransition||void 0!==t.OTransition},getTransitionPrefix:function(){return/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase())?"-moz-transition":/webkit/.test(navigator.userAgent.toLowerCase())?"-webkit-transition":/opera/.test(navigator.userAgent.toLowerCase())?"-o-transition":/msie/.test(navigator.userAgent.toLowerCase())?"-ms-transition":"transition"},getTransition:function(t,i,n){var e;return"width"===n?e={width:t}:"left"===n&&(e={left:t}),i/=1e3,e[o]=n+" "+i+"s ease-in-out",e},refill:function(){s.css("width",0),l.css("left",0),r=e.width(),c.initializeItems()},calculateFill:function(t){return r*(t*=.01)},transitionFill:function(t){var i=t-l.width();s.css(c.getTransition(t,a.duration,"width")),l.css(c.getTransition(i,a.duration,"left"))},animateFill:function(t){var i=t-l.width();s.stop().animate({width:"+="+t},a.duration),l.stop().animate({left:"+="+i},a.duration)}};return c[t]?c[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void f.error('Method "'+method+'" does not exist in barfiller plugin!'):c.init.apply(this)}}(jQuery);