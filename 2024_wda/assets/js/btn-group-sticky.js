$(function (e) {
  // sticky function

  function scroller() {
    //   監控超過頁面一半;

    // 監控對象 增加減少 class "sticky-fixed"
    var topper = ($(".container").prop("scrollHeight") / 3) * 2;
    // var contentWidth = $(".content").width();
    // $(".btnGroup-sticky").css("width", contentWidth);
    $(".btnGroup-sticky").toggleClass(
      "sticky-fixed",
      $(window).scrollTop() <= topper
    );
  }

  function scroller2() {
    // 監控對象 增加減少 class "sticky-fixed"
    var topper2 = ($(".content2").prop("scrollHeight") / 3) * 2;
    // var contentWidth2 = $(".content2").width();
    // $(".btnGroup-sticky2").css("width", contentWidth2);
    $(".btnGroup-sticky2").toggleClass(
      "sticky-fixed",
      $(window).scrollTop() <= topper2
    );
  }
  // scroll event
  window.onscroll = function () {
    scroller();
    scroller2();
  };

  $(window).resize(function () {
    scroller();
    scroller2();
  });
});
