// 重复了， 违反了DRY 
const name = 'Snickers';
const age = 2;
// console.log('My dog ' + name + ' is ' + age + ' years old');
const name2 = 'egg';
const age2 = 1;
// console.log('My dog ' + name2 + ' is ' + age2 + ' years old')；
// 函数表达式
// 首字母大写
// 匿名函数
// 箭头函数 不需要 function 关键字 return 关键字也可以不要
// 如果函数体只有一句代码， 并且返回值是返回值的话， 连花括号也可以省掉
const sayMyDog =(name, age) => `My dog ${name} is ${age} years old`;
// es6 字符串模板 
// return 'My dog ' + name + ' is ' + age + ' years old';

console.log(sayMyDog(name, age));