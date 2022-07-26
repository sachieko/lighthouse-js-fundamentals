const loopyLighthouse = function(range, multiple, words) {
  // range is an array of [start,stop]
  // multiple is an array of [multiple1, multiple2] to determine which numbers are replaced
  // words is an array of [word1, word2] to replace multiple1 and multiple2 respectively
  for (let number = range[0]; number <= range[1]; number++) {
    // Starts running at range[0], and stops inclusively at range[i].
    if (number % multiple[0] === 0 && number % multiple[1] !== 0) {
      console.log(words[0]);
    } else if (number % multiple[1] === 0 && number % multiple[0] !== 0) {
      console.log(words[1]);
    } else if (number % multiple[0] === 0 && number % multiple[1] === 0) {
      console.log(words[0] + words[1]);
    } else {
      console.log(number);
    }
  }
};
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
