// 化实例化的繁为函数封装的简单， 一定要用 this？
// 构造函数， 封装实例化过程， 更加简便
// 有封装功能
function Cat(name, color) {
    // this
    return {
        name: name,
        color: color
    }
}
let obj = new Object();
let cat1 = Cat('Tom', '黑色');
console.log(cat1.name, cat1.color);
console.log(cat1.constructor);
console.log(cat1 instanceof cat2)