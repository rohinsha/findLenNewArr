function findLenNewArr(arr, l, r) {
  let arr1 = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] >= 5 && arr[i] + arr[j] <= 7) {
        arr1.push(arr[i] + arr[j]);
      }
    }
  }

  return arr1.length;
}

let r = findLenNewArr([2, 3, 4, 5], 5, 7);
console.log(r);
