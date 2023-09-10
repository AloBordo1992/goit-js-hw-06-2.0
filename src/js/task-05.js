const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener(
  'input',
  e =>
    (span.textContent = !e.currentTarget.value
      ? 'Anonymous'
      : e.currentTarget.value)
);
