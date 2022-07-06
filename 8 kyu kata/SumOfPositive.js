function positiveSum(arr) {
  let total = 0;
  arr.forEach((arrayItem) => {
    if (arrayItem > 0) {
      total += arrayItem;
    }
  });
  return total;
}
