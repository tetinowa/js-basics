// function isDivisibleby5(a) {
//     if (a % 5 === 0 )
//         return true;
//     else {return false}
// }

// console.log(isDivisibleby5(47));

// function second(a) {
//     if (a >=1git  a<=100) return "include";
//     else return "exclude";
// }

// console.log(second(20));

// function third(a,b,c) {
//     if (a > b && a > c) return a;
//     if (b > a && b > c) return b;
//     if (c > a && c > b) return c;
// }
// console.log(third(23,56,22))

// function fourth(a) {
//     if (a % 4 ==0) return true; else return false;
// }

// console.log(fourth(2007))

// function fifth(a) {
//     if (a >= 90 && a <= 100) return "A"
//      else if (a >= 70) return "B"
//         else if (a >= 60) return "C"
//         else if (a >= 50) return "D"
//         else return "F";
// }

// console.log(fifth(70))

// function seasoncalc(month) {
//     if (month >= 3 && month <= 5) return "Spring";
//     else if (month >= 6 && month <= 8) return "Summer";
//     else if (month >= 9 && month <= 11) return "Autumn";
//     else if (month === 12 || month <= 2) return "Winter";
// }
// console.log(seasoncalc(4))

// function timecheck (time) {
//     if (time <= 11) return "Good morning";
//     else if (time >= 12 && time <= 17) return "Good afternoon";
//     else if (time >= 18 && time <= 23) return "Good evening"
// }

// console.log(timecheck(2))

function greetppl (temp, rainy) {
    if (rainy) {if (temp < 20) return ("It's a bit cool today! Don't forget your umbrella")
    else if (temp < 30) return ("It's a warm day! Don't forget your umbrella")
    else if (temp >=30) return ("It's a hot day! Don't forget your umbrella");
 else {
        if (temp < 20) return "It's a bit cool today!"
        else if (temp < 30) return "It's a warm day!"
        else if (temp >= 30) return "It's a hot day!";
    }}}

console.log(greetppl(15, false))