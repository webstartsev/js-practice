// https://www.codingame.com/training/easy/chuck-norris

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();
console.error("MESSAGE", MESSAGE);
let ascii7bit = '';
for(let i = 0; i < MESSAGE.length; i++){
    console.error("MESSAGE[i]", MESSAGE[i]);
    ascii7bit += MESSAGE[i].charCodeAt(0).toString(2);
}

let char;
let count = 0;

let output = '';
for(let i = 0; i < ascii7bit.length; i++){
    let flag = false;
    if(char === undefined){
        char = ascii7bit[i];
        count = 1;
    } else if(char !== ascii7bit[i] ) {
        flag = true;
    } else if(i === ascii7bit.length - 1) {
        flag = true;
        count++;
    } else  {
        count++;
    }
    
    if(flag){
        let countChars = '';
        switch(char){
            case '0':
                for(let j = 0; j < count; j++){
                    countChars += 0;
                }
                output += '00 ' + countChars + ' ';
                break;
            case '1':
                for(let j = 0; j < count; j++){
                    countChars += 0;
                }
                output += '0 ' + countChars + ' ';
                break;
        }
        char = ascii7bit[i];
        count = 1;
    }
}
console.error("ascii7bit", ascii7bit);
// Write an action using console.log()
// To debug: console.error('Debug messages...');

console.log(output.trim());