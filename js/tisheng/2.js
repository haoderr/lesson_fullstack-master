// 执行栈 js 语言得以运行起来
// 逐行运行
// 执行栈 顶部 当前在运行的代码
// 全局栈 f1 f2  栈底 FILO 
f2();// 出栈 内存的回收
f1();// 入出栈 内存的回收
console.log('aaa'); // idle
// 函数的声明
function f1() {
    var b = 1;
    console.log('f1')
}

function f2() {
    var a = 1;
    console.log('f2')
}