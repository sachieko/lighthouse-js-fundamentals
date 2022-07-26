const loopyLighthouse = function(range, multiple, words) {
  // range is an array of [start,stop]
  // multiple is an array of [multiple1, multiple2] to determine which numbers are replaced
  // words is an array of [word1, word2] to replace multiple1 and multiple2 respectively
  for (let number = range[0]; number <= range[1]; number++) {
    // Defining conditions and empty string
    let cond0 = number % multiple[0] === 0;
    let cond1 = number % multiple[1] === 0;
    let fin = '';
    if (cond0) {
      fin += words[0];
    }
    if (cond1) {
      fin += words[1];
    }
    if (fin === '') {
      fin += number;
    }
    console.log(fin);
  }
};
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
