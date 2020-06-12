const result = document.getElementById("res");
const re = /[-+*/]/;
const validExp = /^\w+[-+*/]\w+$/;

////////////////////////////////////////////////////////////////////////
// onClick Events

function clickZero() {
  result.innerHTML += "0";
}

function clickOne() {
  result.innerHTML += "1";
}

function clearResult() {
  result.innerHTML = "";
}

function addOperator(op) {
  if (validateEntry()) result.innerHTML += op;
}

function equals() {
  const exp = result.innerHTML;
  if (exp.search(validExp) !== -1) {
    const operator = exp.match(re)[0];
    const operands = exp.split(re);
    const op1 = parseInt(operands[0], 2);
    const op2 = parseInt(operands[1], 2);

    switch (operator) {
      case "+":
        // sum function
        result.innerHTML = sum(op1, op2);
        break;
      case "-":
        // sub function
        result.innerHTML = sub(op1, op2);
        break;
      case "*":
        // multiply function
        result.innerHTML = multiply(op1, op2);
        break;
      case "/":
        // divide function
        result.innerHTML = divide(op1, op2);
        break;
      default:
        break;
    }
  }
}

///////////////////////////////////////////////////////////////////////////
// Binary Arithmetic Functions

function divide(op1, op2) {
  let quotient = "";

  if (op2 === 0) {
    return "Cannot divide by zero";
  }

  quotient = Math.floor(op1 / op2);
  console.log(quotient);
  return quotient.toString(2);
}

function multiply(op1, op2) {
  let product = "";

  product = op1 * op2;
  return product.toString(2);
}

function sub(op1, op2) {
  let difference = "";

  if (op1 >= op2) difference = op1 - op2;
  else difference = op2 - op1;

  return difference.toString(2);
}

function sum(op1, op2) {
  let sum = "";

  sum = op1 + op2;
  return sum.toString(2);
}

////////////////////////////////////////////////////////////////////////
// validate that an operator [-+*/] is placed between 2 operands
function validateEntry() {
  if (result.innerHTML.length != 0 && result.innerHTML.search(re) === -1) {
    return true;
  }
  return false;
}
