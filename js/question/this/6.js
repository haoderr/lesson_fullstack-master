// number 类型， 但是要排斥掉NuN
const isNumber = val =>typeof val === 'number' && val === val;
// console.log(isNumber('2'));
// 这不是一个数字
console.log(NaN == NaN)
console.log(typeof NaN);