const fs = require("fs");

const data = fs.readFileSync("./expenses.txt", "utf8");
const lines = data.split("\n");

for (leftIndex = 0; leftIndex < lines.length; leftIndex++) {
  const left = parseInt(lines[leftIndex]);
  for (rightIndex = leftIndex + 1; rightIndex < lines.length; rightIndex++) {
    const right = parseInt(lines[rightIndex]);
    console.log(`${left} + ${right} = ${left + right}`);

    if (left + right == 2020) {
      console.log(`${left} * ${right} = ${left * right}`);
      process.exit();
    }
  }
}
