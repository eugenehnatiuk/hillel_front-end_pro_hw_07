/*
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

Наступний код має працювати:

const array = [1, '2', 5, 3, '5', 4, 5, 6, '7'];
removeElement(array, 5);
console.log(array); // Результат: [1, '2', 3, '5', 4, 6, '7']
*/

function removeElement(array, item) {
  const firstIndex = 0;
  const lastIndex = array.length - 1;

  for (
    let currentIndex = lastIndex;
    currentIndex >= firstIndex;
    currentIndex--
  ) {
    if (array[currentIndex] === item) {
      array.splice(currentIndex, 1);
    }
  }
  return array;
}

const array = [1, '2', 5, 5, 3, '5', 4, 5, 6, '7'];
removeElement(array, 5);

console.log(array);