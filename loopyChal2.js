const loopyLighthouse = function(range, multiple, words) {
  // range is an array of [start,stop]
  // multiple is an array of [multiple1, multiple2] to determine which numbers are replaced
  // words is an array of [word1, word2] to replace multiple1 and multiple2 respectively
  for (let number = range[0]; number <= range[1]; number++) {
    // Defining conditions to save space.
    let cond1 = number % multiple[0] === 0;
    let cond2 = number % multiple[1] === 0;
    // Starts running at range[0], and stops inclusively at range[i].
    if (cond1 && !cond2) {
      console.log(words[0]);
    } else if (cond2 && !cond1) {
      console.log(words[1]);
    } else if (cond1 && cond2) {
      console.log(words[0] + words[1]);
    } else {
      console.log(number);
    }
  }
};
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
