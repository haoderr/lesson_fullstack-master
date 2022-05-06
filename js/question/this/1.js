function func(num) {
    // this 指向谁， this.count++  就是谁的
    // 1. new this -> 实例  大写作为构造函数  约定
    // 2. window || global  || use strict
    // 3. call || apply
    this.count++;  // 实例， 不属于 类
}
let obj = new func(1);
console.log(obj instanceof func);
// func 一等对象  count属性属于谁？ func 自己的
func.count = 0; // 类的静态属性， 不属于实例
func(0);  // 普通函数
console.log(func.count); // 一点关系都没有