// 本身 内部暗流涌动
// 两个世界 函数[call] 构造函数[constructor]
// [call] 指向全局
// [constructor] this 实例  默认返回值
'use strict';// 严格模式
function Dog(type) {
    console.log(this);// 普通函数 undefined
    this.type = type;
}

// 心流时刻
// 函数都有this， 不管他是以什么方式运行
// this 是一个指针， 和运行方式相关
Dog();  //普通函数  this？  运行环境相关   node后端  global
// new 关键字  运算符关键字
// let dog = new Dog();  // this 指向  实例化后的对象  作为构造函数