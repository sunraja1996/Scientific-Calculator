let input = document.getElementById('result');

function insert(value) {
  input.value += value;
}

function clearScreen() {
  input.value = '';
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    alert('Invalid input');
  }
}

function pow(base, exponent) {
  return Math.pow(base, exponent);
}

function sqrt(number) {
  return Math.sqrt(number);
}

function sin(number) {
  return Math.sin(number);
}

function cos(number) {
  return Math.cos(number);
}

function tan(number) {
  return Math.tan(number);
}

function log(number) {
  return Math.log(number);
}

function factorial(number) {
  if (number < 0) {
    return -1;
  } else if (number == 0) {
    return 1;
  } else {
    return (number * factorial(number - 1));
  }
}
