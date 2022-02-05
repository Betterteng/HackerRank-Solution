function superDigit(n, k) {
  // Write your code here
  /**
   * Option 1: This works, but not efficient...
   * */
  // if (n.length === 1) {
  //   return n;
  // } else {
  //   // Assemble the wanted integer
  //   let assembledValue = '';
  //   for (let i = 0; i < k; i++) {
  //     assembledValue += n.toString();
  //   }
  //
  //   // Get the calculated integer
  //   let result = 0;
  //   let length = assembledValue.length;
  //   for (let i = 0; i < length; i++) {
  //     result += parseInt([...assembledValue][i]);
  //   }
  //
  //   return superDigit(result.toString(), 1);
  // }

  /**
   * Option 2:
   * */
  let result = ((n.split('').map(e => Number(e)).reduce((a, b) => a + b, 0)) * k).toString();
  return result.length === 1 ? result : superDigit(result, 1);
}

console.log(superDigit('148', 3)); // Expected Output: 3
