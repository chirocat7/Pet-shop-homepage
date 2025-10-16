console.log('スクリプトが読み込まれました！');

$(function () {
  console.log('DOMの準備が完了しました！');
  $('.hamburger_btn').click(function () {
    console.log('ハンバーガーボタンがクリックされました！');
    $(this).toggleClass('active');
    $('.menu-bar').toggleClass('active');
  });
});