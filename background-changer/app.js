const btn = document.querySelector('button');

const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const hexValues = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

btn.addEventListener('click', () => {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }
  body.style.backgroundColor = hex;
  h1.textContent = `The Hex Color: ${hex}`;
});
