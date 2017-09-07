$(function(){


  $(".thisDeco").click(function(){
    setInterval(function(){
      $(".thisDeco").fadeOut(600,function(){$(this).fadeIn(600)});
    },2000)
  }),


  /*この部分はCSSでも可能なようなので、排除
  *$('#main-nav ul.menu li a').hover(function(){
  *  $(this).css("text-decoration","underline");},
  *  function(){
  *  $(this).css("text-decoration","none")}
  *);
  */


  $('.clickEventExe').click(function () {
    $(this).text("クリックされました");
  }),
  $('.dblclickEventExe').dblclick(function () {
    $(this).text("ダブルクリックされました");
  }),
  $('.mousedownEventExe').mousedown(function () {
    $(this).text("マウスダウンされました");
  }),
  $('.mouseupEventExe').mouseup(function () {
    $(this).text("マウスアップされました");
  }),
  $('.mouseoverEventExe').mouseover(function () {
    $(this).text("マウスオーバーされました");
  }),
  $('.mouseoutEventExe').mouseout(function () {
    $(this).text("マウスアウトされました");
  }),
  $('.mouseenterEventExe').mouseenter(function () {
    $(this).text("マウスエンターされました");
  }),
  $('.mouseleaveEventExe').mouseleave(function () {
    $(this).text("マウスリーブされました");
  }),
  $('.mousemoveEventExe').mousemove(function () {
    $(this).text("マウスムーブされました");
  }),
  $('.mousehoverEventExe').mouseout(function () {
    $(this).text("マウスホバーされました");
  });


/*  $( ".ui-accordion" ).accordion();
*/
});
