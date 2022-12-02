const zeroPad = (num) => "00000000".slice(String(num).length) + num;
const textToBinary = (username) =>
  username
    .split("")
    .map((char) => zeroPad(char.charCodeAt(0).toString(2)))
    .join(" ");

// 加密字典
const binaryToZeroWidth = (binary) =>
  binary
    .split("")
    .map((binaryNum) => {
      const num = parseInt(binaryNum, 10);
      if (num === 1) {
        return "​";
      } else if (num === 0) {
        return "‌";
      }
      return "‍";
    })
    .join("");

// Tests
// const textToBinaryADI = textToBinary("ADI"); // 二进制
// console.log(`ADI-LOG => textToBinaryADI`, textToBinaryADI);
// const binaryToZeroWidthADI = binaryToZeroWidth(textToBinaryADI); // 零宽字符
// console.log(`ADI-LOG => binaryToZeroWidthADI`, binaryToZeroWidthADI, binaryToZeroWidthADI.length);
// // binaryToZeroWidthADI => ﻿‍‌​﻿‍‎​﻿‎‏​﻿‌﻿​‌﻿‍​﻿‎‎​‌‏‍​‏﻿‍​‏﻿‍​‏﻿﻿

// 解密字典
const zeroWidthToBinary = (string) =>
  string
    .split("")
    .map((char) => {
      if (char === "​") {
        return "1";
      } else if (char === "‌") {
        return "0";
      }
      return " ";
    })
    .join("");

// Tests
// const zeroWidthToBinaryADI = zeroWidthToBinary(binaryToZeroWidthADI);
// console.log(`ADI-LOG => zeroWidthToBinaryADI`, zeroWidthToBinaryADI);

const binaryToText = (string) =>
  string
    .split(" ")
    .map((num) => String.fromCharCode(parseInt(num, 2)))
    .join("");

// Tests
// const binaryToTextADI = binaryToText(zeroWidthToBinaryADI);
// console.log(`ADI-LOG => binaryToTextADI`, binaryToTextADI);

