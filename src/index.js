
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0 || matrix.length === 0) return [];

  matrix.map((item, index) => index % 2 !== 0 ? item.reverse() : item)

	return matrix.flat();
}
