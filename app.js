let randomNumber = Math.floor(Math.random() * 100);
let n1 = 0;
let n2 = 99;
let preanswer = prompt("請輸入0~99之間的數字");
answer = Number(preanswer);

console.log(typeof Number(answer));
console.log(2 > 1);
console.log("2" > 1);
// answer == NaN 這個不行，因為NaN == NaN永遠會是false

while (true) {
  if (
    answer <= n1 ||
    answer >= n2 ||
    answer.constructor === String ||
    answer == NaN
  ) {
    answer = prompt(
      "超出範圍囉！請重新輸入！請輸入" + n1 + "~" + n2 + "之間的數字"
    );
  } else {
    break;
  }
}

for (i = 1; i < 6; i++) {
  if (i == 5) {
    if (
      answer <= n1 ||
      answer >= n2 ||
      answer.constructor === String ||
      answer == NaN
    ) {
      answer = prompt(
        "超出範圍囉！請重新輸入！請輸入" + n1 + "~" + n2 + "之間的數字"
      );
      i -= 1;
      continue;
    } else if (answer != randomNumber) {
      alert("嫩");
      break;
    } else {
      alert("險象環生");
      break;
    }
  } else {
    if (
      answer <= n1 ||
      answer >= n2 ||
      answer.constructor === String ||
      answer == NaN
    ) {
      answer = prompt(
        "超出範圍囉！請重新輸入！請輸入" + n1 + "~" + n2 + "之間的數字"
      );
      i -= 1;
      continue;
    } else if (answer > randomNumber) {
      alert("太大囉");
      n2 = answer;
      answer = prompt(
        "你還有" + (5 - i) + "次機會，請輸入" + n1 + "~" + n2 + "之間的數字"
      );
      continue;
    } else if (answer < randomNumber) {
      alert("太小囉");
      n1 = answer;
      answer = prompt(
        "你還有" + (5 - i) + "次機會，請輸入" + n1 + "~" + n2 + "之間的數字"
      );
      continue;
    } else if (answer == randomNumber) {
      alert("答對！你是幸運兒！");
      break;
    }
  }
}

// 方案二
// let randomNumber = Math.floor(Math.random() * 100);
// let n1 = 0;
// let n2 = 99;

// for (let i = 0; i < 5; i++) {
//   let answer = prompt(
//     "你還有" + (5 - i) + "次機會，請輸入" + n1 + "~" + n2 + "之間的數字"
//   );

//   if (i == 4) {
//     if (answer < n1 || answer > n2) {
//       alert("超出範圍囉！");
//       i -= 1;
//       continue;
//     } else if (answer != randomNumber) {
//       alert("嫩");
//       break;
//     } else {
//       alert("險象環生");
//       break;
//     }
//   }
//   if (answer < n1 || answer > n2) {
//     alert("超出範圍囉！");
//     i -= 1;
//     continue;
//   } else if (answer > randomNumber) {
//     alert("太大囉");
//     n2 = answer;
//     continue;
//   } else if (answer < randomNumber) {
//     alert("太小囉");
//     n1 = answer;

//     continue;
//   } else if (answer == randomNumber) {
//     alert("恭喜答對！");
//     break;
//   }
// }

// 法三
// answer = 6;
// while (true) {
//   guess = prompt();
//   if (guess == answer) {
//     break;
//   }
// }
