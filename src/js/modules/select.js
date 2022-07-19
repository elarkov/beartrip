export function select() {

  let viewportWidth;
  let setViewportWidth = function () {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  };

  const dropDownContent = function (className) {
    className.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const countBlock = item.nextElementSibling;
        countBlock.classList.toggle('active');
      })
    });
  };

  dropDownContent(document.querySelectorAll('.select-field'));

  var logWidth = function () {
    if (viewportWidth < 1024) {
      dropDownContent(document.querySelectorAll('.column-center__header'));
    }
  };

  setViewportWidth();
  logWidth();

  window.addEventListener('resize', function () {
    setViewportWidth();
    logWidth();
  }, false);

}