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
/*-------------------------------*/








