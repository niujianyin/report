/*
 * module name：index.js
 * author：niujy
 * date：2016年07月06日14:59:54
 */
(function($) {
  var $win = $(window);
  
  // 窗口变化
  var $r_content = $(".report_content");
  var $r_side = $(".side-catalog");
  var $goTop = $("#goTop");
  var $progress = $(".report_progress");
  var winresize = function() {
    if($win.scrollTop() > 0){
      $r_content.removeClass('ontop');
      $r_side.show();
    }
  };
  var j = window, h = document, k = h.documentElement;
  var e = 0, l = 0, i = 0, g = 0, f = 0, m = 0;
  var progress = function(){
    g = h.body.scrollTop || k.scrollTop || j.pageYOffset || 0;
    l = j.innerHeight || k.clientHeight || h.body.clientHeight || 0;
    m = Math.max(h.body.scrollHeight, k.scrollHeight || 0, l);
    var a = (g)/(m-l+1);
    $(".report_progress_bar").css({
      "-webkit-transform": "translateX(" + ((1 > a ? 100 * a : 100) - 100) + "%)",
      transform: "translateX(" + ((1 > a ? 100 * a : 100) - 100) + "%)"
    })
  }
  $win.on("resize", function() {
    winresize();
  }).on("mousewheel", function(event) {
    var top = $win.scrollTop();
    if(-1 === event.deltaY){
      $r_content.removeClass('ontop');
      $r_side.show();
      $goTop.show();
      $progress.show();
      $(".side-btns-2wm").show();
      event.stopPropagation();
      event.preventDefault();
    } else if(1 === event.deltaY&& 0 >= top){
      $r_content.addClass('ontop');
      $r_side.hide();
      $goTop.hide();
      $progress.hide();
      $(".side-btns-2wm").hide();
    }
  }).on("scroll", function(t) {
    var top = $win.scrollTop();
    if(top>0){
      $r_content.removeClass('ontop');
      $r_side.show();
      $goTop.show();
      $progress.show();
      $(".side-btns-2wm").show();
    } else if(0 >= top){
      $r_content.addClass('ontop');
      $r_side.hide();
      $goTop.hide();
      $progress.hide();
      $(".side-btns-2wm").hide();
    }
    progress();
  });



  $(".report_main_read_btn").on("click",function(){
    if($r_content.hasClass('ontop')){
      $r_content.removeClass('ontop');
      $r_side.show();
    } else {
      $r_content.addClass('ontop');
      $r_side.hide();
    }
  });

  $("#goTop").on("click",function(){
    $('body,html').animate({scrollTop:0},1000);
  });
  

  var side = (function() {
    var $catalog = $(".side-catalog");
    var $goup = $(".side-catalog .go-up");
    var $godown = $(".side-catalog .go-down");
    var $arrow = $(".side-catalog .arrow");
    var $scroller = $(".side-catalog .catalog-scroller");
    var $list = $scroller.find(".catalog-list");
    var $content = $(".report_main_content");
    var $rightwrap = $(".right-wrap");
    var $commentWrap = $(".report-sina-comment-wrap");

    var that = this;

    var toggleArrow = function(){
      var top = $scroller.scrollTop();
      var listHeight = $scroller.find(".catalog-list").height();
      var scrollerHeight = $scroller.height();
      0 >= top ? $goup.addClass("disable") : $goup.removeClass("disable");
      top >= listHeight - scrollerHeight ? $godown.addClass("disable") : $godown.removeClass("disable");
    };

    that.scrollUp = function(o) {
      var t = 31 * o,
        i = $scroller.scrollTop();
      $scroller.stop().animate({
        scrollTop: i - t
      }, 200, function() {
        toggleArrow();
        $godown.removeClass("disable");
      })
    };

    that.scrollDown = function(o) {
      var t = 31 * o,
        l = $scroller.scrollTop();
      $scroller.stop().animate({
        scrollTop: l + t
      }, 200, function() {
        $goup.removeClass("disable");
        toggleArrow();
      })
    };

    that.toDisplay = function() {
      var $banner = $(".report_main_banner");
      var height = 828;
      var bannerHeight = $banner.offset().top + $banner.height();
      var finalHeight = Math.max(bannerHeight, height) -  300;
      var top = $(window).scrollTop();
      top >= finalHeight ? $catalog.css("visibility", "visible") : $catalog.css("visibility", "hidden");
    };
    that.scrollTo = function(idx) {
      var $link = $catalog.find('[href="#' + idx + '"]');
      if ($link.length > 0) {
        var $title = $link.parents(".catalog-title");
        var l = $title.offset().top - $list.offset().top + 4;
        if(($title.offset().top !== $list.offset().top) || idx == 1){
          $scroller.stop().animate({
            scrollTop: l - 170
          }, 300, function() {
            toggleArrow();
          });
          $arrow.stop().animate({
            top: l
          }, 300);
        }
      }
    };
    var nearName = function() {
      var $names = $(document.body).find(".report_anchor");
      var scrollTop = $(window).scrollTop();
      var curHeight = 10000, top, $item, $finalItem = $names[0];

      for(var i=0,len=$names.length; i<len; i++){
        $item = $($names[i]);
        top = Math.abs($item.offset().top - scrollTop);
        if(curHeight > top){
          curHeight = top;
          $finalItem = $item;
        }
      }
      return $finalItem.attr("name");
    };
    var timer = null;
    var __scroll = function() {
      timer && (clearTimeout(timer),timer = null);
      timer = setTimeout(function() {
        var idx = nearName();
        that.scrollTo(idx);
      }, 50),
      that.toDisplay();
    };
    var sideEvent = function() {
      var lh = $list.height();
      var sh = $scroller.height();
      if(lh<=0){
        lh = $list.find(".catalog-title").length * 31;
      }
      if(lh-sh <=0){
        $catalog.addClass('side-catalog-hover-no');
      }
      $catalog.bind("mouseover", function(event) {
        $catalog.addClass('side-catalog-hover');
        $catalog.bind("mousewheel", function(event, delta, deltaX, deltaY) {
          var i = -delta;
          0 > i ? that.scrollUp(3) : that.scrollDown(3);
          event.stopPropagation();
          return false
        })
      }).bind("mouseout", function() {
        $catalog.removeClass('side-catalog-hover');
        $catalog.unbind("mousewheel");
      });
      $(window).bind("scroll", __scroll),
      $(document).bind("ready", function() {
        __scroll();
        that.toDisplay();
      });
      $catalog.on("click", ".go-up", function() {
        that.scrollUp(3)
      });
      $catalog.on("click", ".go-down", function() {
        that.scrollDown(3)
      });
    };
    sideEvent();
  })();
})(jQuery);




















// 绑定事件
  // var isSupportTransition = "transition" in document.documentElement.style || "webkitTransition" in document.documentElement.style;
  

  // b && d.on("transitionend webkitTransitionEnd", function() {
  //       N.mainHeight = s.innerHeight(),
  //       e.off("mousewheel.ontop scroll.ontop"),
  //       _ = !0
  //   });
  // var I = function() {
  //       a.removeClass("ontop"),
  //       k = !1,
  //       b ? (_ = !1,
  //       e.on("mousewheel.ontop scroll.ontop", function(t) {
  //           e.scrollTop(0),
  //           t.stopPropagation(),
  //           t.preventDefault()
  //       })) : N.mainHeight = s.innerHeight()
  //   }
  //     , z = function() {
  //       a.addClass("ontop"),
  //       k = !0
  //   }



