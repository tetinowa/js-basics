// 1. 1–100 хүртэлх бүх 3 болон 5-д хуваагддаг тоог хэвлэх

// function checkNum(i) {
//   while (i <= 100) {
//     i++;
//     if (i % 3 === 0 && i % 5 === 0) console.log(i);
//   }
// }

// checkNum(1);

// let num = 987;
// let sum = 0;
// let arr = [];

// 2. Өгөгдсөн тооны цифрүүдийн нийлбэрийг ол
// function checkDigitSum(num) {
//   let sum = 0;
//   while (num > 0) {
//     let digit = num % 10;
//     sum = sum + digit;
//     num = (num - digit) / 10;
//   }
//   return sum;
// }

// console.log(checkDigitSum(987));

// 3. Өгөгдсөн цагийг 24 цагийн форматаас 12 цагийн AM/PM форматаар хөрвүүлэх функц бич

function convertTime(hour, min) {
  aaaaa;
}

// 4. Өгөгдсөн өдрийг шалгаж, зөвхөн амралтын өдөр эсвэл ажлын өдөр болохыг хэвлэнэ үү

// function checkDay(day) {
//   switch (day) {
//     case 1:
//       console.log("weekday");
//       break;
//     case 2:
//       console.log("weekday");
//       break;
//     case 3:
//       console.log("weekday");
//       break;
//     case 4:
//       console.log("weekday");
//       break;
//     case 5:
//       console.log("weekday");
//       break;
//     case 6:
//       console.log("weekend");
//       break;
//     case 7:
//       console.log("weekend");
//       break;
//   }
// }

function checkDay(day) {
  switch (day) {
    case 1:
      return "weekday";
    case 2:
      return "weekday";
    case 3:
      return "weekday";
    case 4:
      return "weekday";
    case 5:
      return "weekday";
    case 6:
      return "weekend";
    case 7:
      return "weekend";
    default:
      return "invalid";
  }
}

console.log(checkDay(1));
