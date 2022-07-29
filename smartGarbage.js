const smartGarbage = function(trash, bins) {
  let trashobj = bins;
  if (trash === 'waste') {
    trashobj.waste = trashobj.waste + 1;
  } else if (trash === 'recycling') {
    trashobj.recycling = trashobj.recycling + 1;
  } else if (trash === 'compost') {
    trashobj.compost = trashobj.compost + 1;
  }
  return trashobj;
};
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });