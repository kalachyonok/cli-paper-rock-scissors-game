const AsciiTable = require("ascii-table");

// Functional approach
// const createTable = (args, matrix) => {
//   const table = new AsciiTable("Hint: Table of game combinations");
//   table.setHeading("v PC / User >", ...args);

//   for (let i = 0; i < args.length; i++) {
//     table.addRow(args[i], ...matrix[i]);
//   }

//   console.log(table.toString());
// };

// OOP implementation option
class Table {
  showTable(args, matrix) {
    const table = new AsciiTable("Hint: Table of game combinations");
    table.setHeading("v PC / User >", ...args);

    for (let i = 0; i < args.length; i++) {
      table.addRow(args[i], ...matrix[i]);
    }

    console.log(table.toString());
  }
}

const table = new Table();

module.exports = { showTable: table.showTable };
