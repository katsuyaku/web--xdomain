$(function(){
  $('.thisDeco').mouseover(function () {
    $(this).fadeOut("slow");
  }),
  $('.clickEventExe').click(function () {
    $(this).text("クリックされました");
  }),
  $('.mouseoverEventExe').mouseover(function () {
    $(this).text("マウスオーバーされました");
  }),
  $('.mouseoutEventExe').mouseout(function () {
    $(this).text("マウスアウトされました");
  });
});
