// js 解决实例和类的关系
// 面向对象语言中 class 不言自明
// java  this 属于class   方法之间， 共享属性和方法 this ，
// js 在函数中引入了this  new  不需要返回对象（call constructor）, 
// 函数看上去更像构造函数 this -> 实例化的对象
function Cat(name, color) {
    this.name = name;
    this.color = color;
}

// 2.js + 3.js cat1 和 Cat 是什么关系？
let cat1 = new Cat('大毛', '黄色');
let cat2 = new Cat('二毛', '黑色');
console.log(cat1.constructor);
console.log(cat1.constructor == cat2.constructor); //兄弟
console.log(cat1.__proto__, cat1.__proto__ == cat2.__proto__);
console.log(cat1.__proto__.constructor == cat2.__proto__.constructor);
console.log(cat1 instanceof Cat);

console.log(Cat.prototype.isPrototypeOf(cat1));