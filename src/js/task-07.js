const rangeText = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
// console.dir(text);
console.dir(rangeText);
rangeText.addEventListener(
  'input',
  ({ currentTarget }) => (text.style.fontSize = `${currentTarget.value}px`)
);
