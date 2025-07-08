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








