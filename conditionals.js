const raining = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

const temperature = 15;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
}
if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
}
if (temperature >= 15) {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}
