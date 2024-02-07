const createMatrix = (size) => {
  const rows = size;
  const cols = size;
  const middle = Math.floor(size / 2);

  const matrix = [];
  // Создаём базовую строку

  let baseRow = new Array(size);
  baseRow.fill("Draw", 0, 1);
  baseRow.fill("win", 1, middle + 1);
  baseRow.fill("lose", middle + 1, size);

  // Заполняем матрицу значениями
  for (let i = 0; i < rows; i++) {
    // Создаем новый массив для каждой строки
    matrix[i] = [];

    if (i !== 0) {
      let shift = baseRow.pop();
      baseRow.unshift(shift);
    }

    for (let j = 0; j < cols; j++) {
      // Заполняем значениями (можете использовать любые нужные вам значения)
      matrix[i][j] = baseRow[j];
    }
  }
  return matrix;
};

// console.log(createMatrix(5));

module.exports = { createMatrix: createMatrix };
