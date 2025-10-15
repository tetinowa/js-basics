// const char = {
//   name: "Arthur Nightingale",
//   gender: "Male",
//   age: "37",
//   isaProtoframe: true,
//   build: {
//     sur: "Nourish",
// crit: "Wrathful_Advance",
//   },
//   afilliation: "The Hex",
// };

// console.log(char["build"][1]);

// filter, find, include

// 1. Reverse a string
// const strr = "hello";

// const reversed = (strr) => {
//   return strr.split("").reverse().join("");
// };

// console.log(reversed(strr));

// 2. Check if a string is a palindrome

// const checkinpali = "level";

// const pali = (checkinpali) => {
//   return checkinpali.split("").reverse().join("");
// };

// console.log(pali(checkinpali));

// aaaaaaaaaaaaa

const name = { firstname: "bat", lastName: "bold" };
// toLowerCase(), toUpperCase()  ---  B.Bat
const displayName = (name) => {
  return (
    name.lastName[0].toUpperCase() + "." + name.firstname.map(name.lastName)
  ) => ;
};

console.log(displayName(name));

// .split("").filter(element) aaaaaaa







const findLongestWord = (sentence) => {
  sentence.split(" ").sort((a,b) => {return b.length - a.length;})  
}