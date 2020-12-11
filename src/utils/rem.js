/*********** REM.js ***********/
(function(doc, win) {
  let widthDafule = 1920;
  var docEl = doc.documentElement,
    // orientationchange 事件 用来监听手机屏幕的反转
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth; //(window.innerWidth);UC 或者QQ 安卓4.0 以下原生浏览器下面是没有
      if (!clientWidth) return;
      clientWidth = clientWidth < widthDafule ? clientWidth : widthDafule;
      docEl.style.fontSize = 100 * (clientWidth / widthDafule) + "px";
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  //DOMContentLoaded dom 加载完成，onload 有什么区别 dom css js OK 才执行的
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);