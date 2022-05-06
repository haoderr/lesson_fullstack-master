// 包装 string('1')
// class String 
let a = '1';
console.log(a.toString()); // a被包装了一下，类型的转换 string
console.log(typeof a); // a 回归 string 
console.log(typeof '1');
let b = new String('1');
console.log(b.toString())
console.log(typeof b);  // object
// js长久以来的一个bug， 32位系统， 为了性能考虑（typeof），使用低位存储变量的类型，
//    3位  null   undefined  00000000000000000000000000000000
// console.log(typeof null); // object
console.log(undefined.toString());
console.log(null.toString());