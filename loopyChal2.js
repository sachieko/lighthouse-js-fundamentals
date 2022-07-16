function loopyLighthouse(range, multiple, words) {
  for (let number = range[0]; number <= range[1]; number++) {
    // Starts running at 100, and stops inclusively at 200.
    if (number % multiple[0] === 0 && number % multiple[1] !== 0){ 
      console.log(words[0]);
    } else if (number % multiple[1] === 0 && number % multiple[0] !== 0){
      console.log(words[1]);
    } else if (number % multiple[0] === 0 && number % multiple[1] === 0){
      console.log(words[0] + words[1]);
    } else {
      console.log(number);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
