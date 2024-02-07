const rules = require("./src/rules");
const { showTable } = require("./src/table");
const { generateHmac } = require("./src/hmac");
const { secretKey } = require("./src/key");

[, , ...args] = process.argv;

// checking argument input conditions
if (args.length < 3) {
  console.error("Enter at least 3 arguments to start the game");
  process.exit();
}

if (args.length % 2 === 0) {
  console.error("Enter an odd number of arguments");
  process.exit();
}

if (new Set(args).size !== args.length) {
  console.error("Don't repeat the original data. All arguments must be unique");
  process.exit();
}

// creating a matrix of combinations of all possible moves
let matrix = rules.createMatrix(args.length);

// implementation of a random computer move
const randomMovement = Math.trunc(Math.random() * args.length) + 1;

// console.log(`Temporary check: ${randomMovement}`);

// HMAC display
console.log("HMAC: " + generateHmac(args[randomMovement - 1], secretKey));

// display input menu
const menu = args.map((item, index) => `${index + 1} - ${item}`);
menu.push("0 - exit", "? - help");
const showMenu = (data) => {
  console.log("Available moves:");
  data.forEach((item) => {
    console.log(`${item}`);
  });
};
showMenu(menu);

console.log("Enter your move and press 'Enter':");

// displaying user input from the console
const functionExecuter = (data) => {
  let inputData = data.toString();

  if (inputData.includes("\n")) {
    inputData = inputData.trim();

    if (inputData === "0") {
      console.log("Game over. Bye!");
      process.exit();
    }

    if (inputData === "?") {
      showTable(args, matrix);
      return;
    }

    if (args.length < inputData || !Number.isFinite(+inputData)) {
      showMenu(menu);
    } else {
      console.log("Your move: " + `${args[inputData - 1]}`);
      console.log("Computer move: " + `${args[randomMovement - 1]}`);

      let answer = matrix[randomMovement - 1][inputData - 1];

      if (answer === "Draw") {
        console.log("Draw. Try again!");
      } else {
        console.log(`You ${answer}!`);
        console.log(`HMAC key: ${secretKey}`);
        console.log(
          "You can check HMAC here: https://wtools.io/ru/generate-hmac-hash"
        );
      }
    }
    process.exit();
  }
};

process.stdin.on("data", functionExecuter);
