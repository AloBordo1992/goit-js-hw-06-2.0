const counter = document.querySelector('#counter');
const val = document.querySelector('#value');
const decrement = counter.firstElementChild;
const increment = counter.lastElementChild;

let couterValue = 0;
decrement.addEventListener('click', () => {
  couterValue -= 1;
  val.textContent = couterValue;
});

increment.addEventListener('click', () => {
  couterValue += 1;
  val.textContent = couterValue;
});
