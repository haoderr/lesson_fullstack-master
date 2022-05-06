// es6 可以给函数默认值
function Person(name = '未命名', age) {
    this.name = name;
    this.age = age;
}
// 面向对象里， 类的静态属性 static 描述类，而不是描述实例的
Person.count = 0;// 类， 构造函数
Person.species = '人类';
Person.prototype = {
    num: 1
}
let sm = new Person();
console.log(sm.num);
// console.log(sm.name);
// let sm2 = new Person('小红');
// console.log(sm.name);