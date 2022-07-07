const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  
function finalPosition(move){
  let position = [0,0];
  for(let dir of move){
    if (dir === 'north'){
      position[1] = position[1] + 1;
    } else if (dir === 'west'){
      position[0] = position[0] - 1;
    } else if (dir === 'south'){
      position[1] = position[1] - 1;
    } else if (dir === 'east'){
      position[0] = position[0] + 1;
    }
  }
  return position;
}
console.log(finalPosition(moves));