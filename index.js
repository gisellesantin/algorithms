function orderNumber(numbers) {
  const ascending = [...numbers];
  const descending = [...numbers];
  ascending.sort((a, b) => a - b);
  descending.sort((a, b) => b - a);

  return { ascending, descending };
}

function findNumber(numberToFind, listOfNumbers) {
  let i = 0;

  while (i < listOfNumbers.length) {
    if (numberToFind === listOfNumbers[i]) {
      return `Number ${numberToFind} was found in the position ${i + 1}`;
    } else {
      i++;
    }
  }

  return `Number ${numberToFind} was not in the list :(`;
}

module.exports = { findNumber, orderNumber };
