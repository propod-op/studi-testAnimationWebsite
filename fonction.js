function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function substract(a, b) {
  return a - b;
}
function divide(a, b) {
  if (canDivide(a, b)) {
    console.log("Division par zero impossible.");
  } else {
    return a / b;
  }
}

function canDivide(a, b) {
  if (b == 0) {
    return false;
  } else {
    return true;
  }
}
