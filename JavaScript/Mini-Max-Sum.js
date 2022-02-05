function miniMaxSum(arr) {
  // Write your code here
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a, b) => a + b, 0);

  console.log((sum - max), (sum - min));
}