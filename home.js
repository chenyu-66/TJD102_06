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

/*------------醫師團隊桌機-------------------*/
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
/*------------最小430醫師介紹-------------------*/
function expandDoctorsOnMobile() {
    if (window.innerWidth <= 430) {
      document.querySelectorAll('.doctor-info').forEach(el => {
        el.style.display = 'block';
      });
    }
  }

  window.addEventListener('load', expandDoctorsOnMobile);
  window.addEventListener('resize', expandDoctorsOnMobile);
/*------------漢堡選單-------------------*/
$(function () {
  $('.menu-ham').click(function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('show');
  });

  // 初始化狀態記憶（針對「服務項目」）
  let clickedOnce = false;

  $('.dropdown > a').on('click', function (e) {
    if (window.innerWidth <= 820) {
      const parentLi = $(this).parent();
      const submenu = $(this).siblings('.submenu');

      // 如果第一次點擊，就展開 submenu，不跳頁
      if (!clickedOnce) {
        e.preventDefault(); // 阻止跳轉
        clickedOnce = true;
        console.log("服務項目被點到了");

        // 關閉其他已展開的 submenu
        $('.dropdown').not(parentLi).removeClass('submenu-open').find('.submenu').slideUp();

        // 展開目前 submenu
        parentLi.toggleClass('submenu-open');
        submenu.stop(true, true).slideToggle();
      } else {
        // 第二次點擊，直接跳頁
        clickedOnce = false; // 重設狀態
        window.location.href = $(this).attr('href');
      }
    }
  });

  // 畫面大小變化時自動重設狀態
  $(window).on('resize', function () {
    if (window.innerWidth > 820) {
      clickedOnce = false;
      $('.submenu').removeAttr('style');
      $('.dropdown').removeClass('submenu-open');
      $('.menu').removeClass('show');
      $('.menu-ham').removeClass('active');
    }
  });
});
