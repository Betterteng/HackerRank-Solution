function countingSort(arr) {
  // Write your code here
  let newArr = Array(100).fill(0);;

  for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    newArr[index] += 1;
  }

  return newArr;
}