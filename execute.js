const { findNumber, orderNumber } = require('./index.js');

(function execute() {
  const numbersToSort = [10, 30, 9, 7, 15];

  console.log('**** Sorting numbers ****');
  console.log(
    '---- Sorting the following list of numbers',
    numbersToSort,
    '-----'
  );
  const result = orderNumber(numbersToSort);
  console.log(
    '---- Sorted ascending list                ',
    result.ascending,
    '-----'
  );
  console.log(
    '---- Sorted descending list               ',
    result.descending,
    '-----'
  );

  console.log('');
  console.log('**** Finding a number ****');

  const numbersToFind = [1, 3, 6, 90, 39, 4];

  console.log('Number to find:', 39);
  console.log(findNumber(39, numbersToFind));
})();
