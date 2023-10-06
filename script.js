const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');
const display = calculator.querySelector('.calculator_display');

keys.addEventListener('click', (event) => {
  if (!event.target.closest('button')) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  // Is this a number keys?
  if (type === 'number') {
    if (displayValue === '0') {
      display.textContent = keyValue;
    } else if (previousKeyType === 'operator') {
      display.textContent = keyValue;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  // Is this a operator key?
  if (type === 'operator') {
    const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
    operatorKeys.forEach((el) => {
      el.dataset.state = '';
    });
    key.dataset.state = 'selected';

    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
  }

  if (type === 'equal') {
    // Perform a calculation
    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const secondNumber = displayValue;

    display.textContent = calculate(firstNumber, operator, secondNumber);
  }

  calculator.dataset.previousKeyType = type;
});

function calculate(firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  let result = '';
  if (operator === 'plus') result = firstNumber + secondNumber;
  if (operator === 'minus') result = firstNumber - secondNumber;
  if (operator === 'times') result = firstNumber * secondNumber;
  if (operator === 'divide') result = firstNumber / secondNumber;
  return result;
}
