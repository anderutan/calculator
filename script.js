const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');
const display = calculator.querySelector('.calculator_display');

keys.addEventListener('click', (event) => {
  if (!event.target.closest('button')) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;

  // Is this a number keys?
  if (key.dataset.type === 'number') {
    if (displayValue === '0') {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  // Is this a operator key?
  if (key.dataset.type === 'operator') {
    console.log(key);

    calculator.dataset.previousKeyType = 'operator';
  }
});
