function plusMinus(arr) {
  // Write your code here
  let positiveNumCount = 0;
  let negativeNumCount = 0;
  let zeroNumCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroNumCount++;
    }
    if (arr[i] > 0) {
      positiveNumCount++;
    }
    if (arr[i] < 0) {
      negativeNumCount++;
    }
  }

  console.log((positiveNumCount/arr.length).toFixed(6));
  console.log((negativeNumCount/arr.length).toFixed(6));
  console.log((zeroNumCount/arr.length).toFixed(6));
}