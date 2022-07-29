const range = function(start, end, step) {
  if (step <= 0) {
    return [];
  } else if (start > end) {
    return [];
  } else if (start === null || end === null || step === null) {
    return [];
  } else {
    let rangearray = [];
    let number = start;
    for (let i = 0; i <= Math.floor((end - start) / step); i++) {
      rangearray.push(number);
      number = number + step;
    }
    return rangearray;
  }
};
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(5,2,3));