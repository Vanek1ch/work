/* плавное поднимание шапки на фулл экране */

window.addEventListener('scroll', function () {
    var header_down = document.querySelector('.header__inner-down');

    if (window.scrollY > 85) {
      header_down.style.position = 'fixed';
      header_down.style.top = '0';
      header_down.style.left = '0';
    } else if (window.scrollY < 85) {
      header_down.style.position = 'relative';
    }
  });