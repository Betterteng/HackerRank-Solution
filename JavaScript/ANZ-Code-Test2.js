function paymentPairs(payments) {
  // Write your code here
  let dollarCount = 0;
  let innerLoop = 1;

  for (let i = 0; i < payments.length - 1; i++) {
    for (let j = 0; (j + innerLoop) < payments.length; j++) {
      if ((payments[i] + payments[j + innerLoop]) % 100 === 0) {
        dollarCount++;
      }
    }
    innerLoop++;
  }

  return dollarCount;
}

console.log(paymentPairs([10, 40, 90, 60]));