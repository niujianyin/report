/*
 * module name：index.js
 * author：niujy
 * date：2016年07月06日14:59:54
 */
(function($) {
  var $win = $(window);
  // 左侧边栏  滚动预留
  // var $side = $(".resound_main_side");
  // $side.on("mousewheel", function(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  // });
  // 测试
  // $win.on('mousewheel', function(event) {
  //   console.log(event.deltaY);
  // }); 
  // 回到顶部
  // $(".gotop").on("click", function(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   e.scrollTop(1);
  // });
  
  // 窗口变化
  // $win.on("resize", function() {
  //   winresize();
  // }).on("mousewheel", function(event) {
  //   var top = $win.scrollTop();
  //   if(-1 === event.deltaY){
  //     $win.addClass('ontop');
  //     event.stopPropagation();
  //     event.preventDefault();
  //   } else if(1 === t.deltaY&& 0 >= top){
  //     $win.removeClass('ontop');
  //   }

  // }).on("scroll", function(t) {
  //   var top = $win.scrollTop();
  //   if(top>0){
  //     $win.addClass('ontop');
  //   } else if(0 >= top){
  //     $win.removeClass('ontop');
  //   }
  // });
  // var winresize = function() {
  //   $win.scrollTop() > 0 && k && I()
  // };
  // winresize();


})(jQuery);

$(function(){
  // 轮播图
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed:500,
    autoplay: 5000,//可选选项，自动滑动
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable :true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  });

//   // feed流样式更改
//   var dom_feedCard1=$(".feed-card-c1").parents('.feed-card-item');
//   // 标题更改
//  dom_feedCard1.find("h2").css({
//    position:"absolute",
//    width:"480px",
//    left:"320px",
//    whiteSpace:"nowrap",
//    overflow:"hidden",
//    textOverflow:"ellipsis",
//    backgroundColor:"red"
//  });


});
function feedView(newsList){
 $(".feed-card-c1").parents('.feed-card-item').css({
   backgroundColor:"red"
 });   
}
















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
