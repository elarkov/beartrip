export function quantity() {

  const form = document.querySelector('.filter-form');
  const decreaseCount = function (el) {
    let input = el.nextElementSibling;
    let value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  };

  const increaseCount = function (el) {
    let input = el.previousElementSibling;
    let value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  };

  form.addEventListener('click', function (e) {
    const target = e.target;
    if (target.classList.contains('qty-btn--minus')) {
      decreaseCount(target);
    }
    if (target.classList.contains('qty-btn--add')) {
      increaseCount(target);
    }
  });

}