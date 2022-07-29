const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
const chooseStations = function(stations) {
  let stationArray = [];
  for (let [name, capacity, type] of stations) {
    if (capacity >= 20 && type === 'school') {
      stationArray.push(name);
    } else if (capacity >= 20 && type === 'community centre') {
      stationArray.push(name);
    }
  }
  return stationArray;
};

console.log(chooseStations(stations));