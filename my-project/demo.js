const fs = require("fs");
const data = fs.readFileSync("data.txt", "utf8");
const words = data.split(" ");
const wordsCount = words.length;
console.log(wordsCount);


