const transpose = function(matrix) {
    let line = [];
    let newMatrix = [];
    let length = 0;
    if (!(Array.isArray(matrix[0]))) {
      return matrix
    } else { 
      length = matrix[0].length;
    }
  let col = 0;
  while (col < length) {
    for (let row of matrix) {
      line.push(row[col]);
     }
     newMatrix.push(line);
     line = [];
     col += 1;
    }
    return newMatrix;
  }
  
  const wordSearch = (letters, word) => { 
      const horizontalJoin = letters.map(ls => ls.join(''))
      for (l of horizontalJoin) {
          if (l.includes(word)) {
              return true
          }
      }
  let newMatrix = transpose(letters);
  const verticalJoin = newMatrix.map(vs => vs.join(''))
      for (v of verticalJoin) {
          if (v.includes(word)) {
              return true
          }
      }
      return false;
    }
  
  module.exports = wordSearch