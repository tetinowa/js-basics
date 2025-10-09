// const num1 = [99, 87, 39, 92, 92, 98, 92, 45, 69, 83]
// const num = 92;
// let num1count = 0 

// for (i = 0; i < num1.length; i++) {
//     if (num1[i] === num) {num1count++}
// }

// console.log(num1count)



const num2 = [91, 18, 95, 27, 32, 76, 10, 74, 38, 95]
let num = 18

function checkIfNumExists (num2, num) {
    for (let i = 0; i < num2.length; i++) {
        if (num === num2[i]) return "true";
        else return "false"}}

    console.log(checkIfNumExists(num2, num))