export function dropDown() {
  const items = document.querySelectorAll('.menu__item');
  items.forEach(function (item) {
    const link = item.children[0];
    link.addEventListener('click', function (e) {
      if (link.nextElementSibling.classList.contains('dropdown')) {
        e.preventDefault();
        const parent = link.closest('li.menu__item');
        parent.classList.toggle('active');
      }
    })
  });
}