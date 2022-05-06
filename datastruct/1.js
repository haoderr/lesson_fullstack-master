// 立即执行函数
// 1. 匿名函数
// 2. 我们也没有把他赋值给变量
// 3. 直接执行， 立即执行函数
// 函数 this -> 运行环境  作用域  作用域链
(function main() {
    // console.log('立即执行');
    let a = 1;
    let ret = 0;
    let res = 0;
    // 执行栈 js 运行
    // 将add函数入栈
    // 将运行add函数， 得到返回值， 并修改ret的值
    ret = add(3, 5);
    // 执行流程  回到了 匿名函数中
    // 栈的出栈操作
    res = a + ret;
})();
// 匿名函数的出栈操作 执行栈回归全局
// 全局栈 出栈， 代码运行结束
let num = 2;
function add(x, y) {
    let sum = 0;
    sum = x + y;
    return sum;
}