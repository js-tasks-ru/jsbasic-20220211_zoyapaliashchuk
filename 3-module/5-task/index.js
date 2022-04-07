
function getMinMax(str) {
  str = str.split(' ');
  let numbers = str.filter(item => Number(item));
  let max = Math.max.apply(null, numbers);
  let min = Math.min.apply(null, numbers);
  return { min: min, max: max };
}
const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }