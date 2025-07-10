/*---------首頁環境照片--------------*/
document.addEventListener('DOMContentLoaded', function () {
  const main = document.getElementById('main');
  const thumbs = document.querySelectorAll('.thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      main.src = thumb.dataset.large;

      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
});

/*------------醫師團隊-------------------*/
$(document).ready(function() {
  $('.doctor-card img').click(function() {
    var $info = $(this).closest('.doctor-card').find('.doctor-info');

    if ($info.is(':visible')) {
      // 已展開，保持不變
      return;
    }

    // 先關閉所有，再展開點選的，等關閉完成再展開
    $('.doctor-info').slideUp(300, function() {
      $info.slideDown(300);
    });
  });
});

/*------------漢堡選單-------------------*/
$(function () {
  $('.menu-ham').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('show');
  });

  // 手機版 submenu 展開，不跳頁，也不自動收回
  $('.dropdown > a').click(function (e) {
    if (window.innerWidth <= 820) {
      e.preventDefault(); // 阻止跳頁

      const parentLi = $(this).parent(); // li.dropdown
      const submenu = $(this).siblings('.submenu');

      // 先關掉其他展開的 submenu（如果你只想允許展開一個的話）
      $('.dropdown').not(parentLi).removeClass('submenu-open').find('.submenu').slideUp();

      // toggle 展開狀態
      parentLi.toggleClass('submenu-open');
      submenu.stop(true, true).slideToggle();
    }
  });
});






