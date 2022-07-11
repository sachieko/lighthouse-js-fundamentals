function judgeVegetable(veg, metric) {
  return veg.reduce((a, b) => a[metric] > b[metric] ? a : b).submitter;
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = "redness"
judgeVegetable(vegetables, metric);