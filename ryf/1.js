let a = 1.23456;
// 奇怪的地方？JS比较复杂
// a 是 number 简单数据类型 不是对象
// a.toFixed 对象
// 在js 中， 基于对象(object-base)的语言
// toFixed(a)
// 你遇到的所有东西几乎都是对象， 编程风格对象化
// console.log(a.toFixed(2));
var n1 = new Number(2);//
// console.log(typeof null); // bug  32位  前三位 000
// 进制转换不准确
// console.log(typeof a, 0.1 + 0.2);、
// 4 ->  二进制100
console.log(n1, typeof n1, n1.valueOf());