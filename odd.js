const isOdd = function (number) {
  if (number % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
console.log("56 is odd: " + isOdd(56));
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));