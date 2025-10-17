// const num = [87, 45, 33, 67, 91]
// total = 0
// for (let i = 0; i < num.length; i++) {total = total + num[i]}
// console.log(total);

// const num1 = [92, -3, 9, -391, -981, 372]
// let total = 0;
// for (let i = 0; i < num1.length; i++) {
//     if (num1[i] > 0)  {
//         total+=num1[i]
//     }
// }
// console.log(total)

// const num2 = [92, 91, -95, 8, 15, 1];
// let smolnum = num2[0];

// for (let i = 0; i < num2.length; i++) {
//     if (num2[i] < smolnum) {smolnum = num2[i]}
// }
// console.log(smolnum)

// const num3 = [21, 98, 91, 0, -2, 90, 190]
// let bgs = 0
// for (let i = 0; i < num3.length; i++) {
//     if (bgs < num3[i]) {bgs = num3[i]}
// }
// console.log(bgs)

// const num4 = [21, 98, 91, 0, 95, 100]
// for (let i = num4.length-1; i >= 0; i--) {console.log(num4[i])}

// const num5 = [ 42, 77, 31, 21, 98, 0, 8]
// let peak = 0
// for (let i = 1; i < num5.length - 1; i++) {
//     if (num5[i] > num5[i-1] && num5[i] > num5[i+1]) {peak++}}
// console.log(peak)

// const num6 = [87, 91, 42, 77, 71, 12]
// let pairs = 0
// for (let i = 0; i < num6.length-1; i++) {
//     for (let j = i + 1; j < num6.length; j++) {console.log(num6[i], num6[j])}}

// const num7 = [91, 97, 23, 42, 36, 110]
// let a = 133
// let sum = 0
// let sumpair = 0

// for (let i = 0; i < num7.length-1; i++) {
//     for (let j = i + 1; j < num7.length; j++) {if (num7[i] + num7[j] === a) sumpair++}}

// console.log(sumpair)

// const num8 = [21, 22, 23, 71, 72, 73]
// const num81 = [22, 23, 72, 73, 91, 92]
// let intersec = 0

// for (i = 0; i < num8.length; i++) {for (j= 0; j < num81.length; j++)
//     {if (num8[i] === num81[j]) {intersec++}}}

// console.log(intersec)

// const num9 = [1, -88, 91, 0, 33, -42]
// const num9n = []

// for (i = 0; i < num9.length; i++) {
//     if (num9[i] < 0) {num9n.push(num9[i])}}

// for (i = 0; i < num9.length; i++) {
//     if (num9[i] >= 0) {num9n.push(num9[i])}}

// console.log(num9n)

const num10 = [89, 90, 91, 93, 94, 95];

for (i = 0; i < num10.length; i++) {
  if (num10[i + 1] - num10[i] > 1) {
    console.log(num10[i] + 1);
  }
}
