##https://www.zybuluo.com/njy/note/334659
# 

标签（空格分隔）： 新浪彩通

---

[TOC]

##项目： 新浪彩通研报

##参考网易页面url：
【链接】进了精神病院，就叫天天不应叫地地不灵
http://view.163.com/special/resound/mentalhospital20160616.html


##测试url：
http://caitong.sina.com.cn/report/detail.html


##jquery-mousewheel
gtihub:
https://github.com/jquery/jquery-mousewheel
```
// using on
$('#my_elem').on('mousewheel', function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
});

// using the event helper
$('#my_elem').mousewheel(function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
});
```