function sum(a, b) {
  return a + b;
}
console.log(sum(5, 3));
function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 3));
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 3)); function divide(a, b) {
  if (b === 0) {
    return 'Error: หารด้วยศูนย์ไม่ได้';
  }
  return a / b;
}
console.log(divide(10, 2));