// https://www.codingame.com/training/easy/horse-racing-duals

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
let horses = [];
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    horses.push(pi);
}

horses.sort(function(a, b) {
  return a - b;
});

let min = 0;
let old;
for(let horse of horses){
    if(old === undefined){
        old = horse;
        continue;
    }

    if(min === 0 || horse - old < min){
        min = horse - old;
    }
    old = horse;
}

// Write an action using console.log()
// To debug: console.error('Debug messages...');

console.log(min);