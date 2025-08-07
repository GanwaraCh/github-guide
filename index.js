function sum(a, b) {
  return a + b;
}
console.log(sum(5, 3));
function subtract(...nums) {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a - b);
}
console.log(subtract(100, 20, 10));