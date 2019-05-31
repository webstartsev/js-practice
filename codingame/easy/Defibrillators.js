// https://www.codingame.com/training/easy/defibrillators

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const LON = readline().replace(/\,/g,".");
const LAT = readline().replace(/\,/g,".");
const N = parseInt(readline());

let minDistance;
let result;
for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    const arrData = DEFIB.split(';');
    
    const name = arrData[1];
    const street = arrData[2];
    const phone = arrData[3];
    const defLon = arrData[4].replace(/\,/g,".");
    const defLat = arrData[5].replace(/\,/g,".");
    
    const x = (defLon - LON) * Math.cos(( parseFloat(LAT) + parseFloat(defLat)) / 2);
    const y = (defLat - LAT);
    const d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;

    if(minDistance === undefined || d <= minDistance){
        minDistance = d;
        result = name;
    }
}


// Write an action using console.log()
// To debug: console.error('Debug messages...');

console.log(result);