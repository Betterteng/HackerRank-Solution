function gridChallenge(grid) {
  // Write your code here
  // Sort every row
  const rowSortedArr = grid.map(e => {
    return [...e].sort((a, b) => a.localeCompare(b)).join('');
  });

  console.log(rowSortedArr);

  // Generate an array to put all columns
  let columnsArr = [];
  for (let i = 0; i < grid[0].length; i++) {
    let str = '';
    for (let j = 0; j < grid.length; j++) {
      str += rowSortedArr[j][i];
    }
    console.log(str);
    columnsArr.push(str);
  }

  console.log(columnsArr);

  // Sort every column
  const columnSortedArr = columnsArr.map(e => {
    return [...e].sort((a, b) => a.localeCompare(b)).join('');
  });

  console.log(columnSortedArr);

  return columnsArr.toString() === columnSortedArr.toString() ? 'YES' : 'NO';
}

console.log(gridChallenge(['abc', 'hjk', 'mpq', 'rtv'])); // Expected Output: YES