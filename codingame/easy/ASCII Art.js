// https://www.codingame.com/training/easy/ascii-art

/**
 * The goal of the problem is to simulate an old airport terminal display: your program must display a line of text in ASCII art. 
 * You have to split strings, store them and recreate others. You can use data structures like arrays or hash tables.
 **/

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();

var regex = new RegExp('.{' + L + '}|.{1,' + Number(L-1) + '}', 'g');

for (let i = 0; i < H; i++) {
    const ROW = readline();
    let arRow = ROW.match(regex);
    const countWord = arRow.length - 1;
    ountputRow = '';
    
    for(let t = 0; t < T.length; t++){
        let find = false;
        for (let i = 0; i < alphabet.length; i++) {
            if(alphabet[i] === T[t].toUpperCase()){
                ountputRow += arRow[i];
                find = true;
            }
        }
        if(!find){
            ountputRow += arRow[countWord];
        }
    }
    console.log(ountputRow);
}