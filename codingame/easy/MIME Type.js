// https://www.codingame.com/training/easy/mime-type

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
let set = new Set();
for (let i = 0; i < N; i++) {
    const inputs = readline().split(' ');
    const EXT = inputs[0].toLowerCase(); // file extension
    const MT = inputs[1]; // MIME type.
    set.add({EXT, MT});
}
// console.error(set);
for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.
    const inputs = FNAME.split('.');
    if(inputs.length === 1){
        console.log('UNKNOWN');
        continue;
    }
    let flag = false;
    for(let item of set){
        if(item.EXT === inputs[inputs.length-1].toLowerCase()){
            flag = true;
            item.MT
            console.log(item.MT);
        }
    }
    if(!flag){
        console.log('UNKNOWN');
    }
}

// Write an action using console.log()
// To debug: console.error('Debug messages...');


// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
// console.log('UNKNOWN');