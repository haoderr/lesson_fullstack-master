//let 是js es6 变量声明的关键字
// 1.变量名 num 代表值所在的空间，在内存中声明了一个空间地址
// 2.index.heml 运行在浏览器中，js是唯一语言
// 3.控制台通过变量名找到，全局变量
// num:number = "faf"  静态语言 c c++ java
// js 是弱类型语言 不太严格
let num; //申明num,数据类型是什么？
console.log(typeof num);//typeof 变量的类型 undefind 它的类型到底是什么
//js 变量的类型有值决定
num = 33; //数字类型
num = '店小二';//字符串类型
//常量
const name = "刘自强"; //字符串
// 今天会取名，明天那啥也行
// 命名很重要 是否有女朋友
// 1.解决了JS弱类型的问题
let isSingle = true;
    //boolSingle = 23;

let numPrice = 12.3;
let gf = null;// 申明变量，值为空
    gf = "小明";

