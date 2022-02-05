function lonelyinteger(a) {
  // Write your code here
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result ^= a[i];
  }

  return result;
}