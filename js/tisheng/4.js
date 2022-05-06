// 4.js 运行  readme.md  硬盘
// 调入 内存中来 交给 CPU 运行
// I/O 

// require 关键字， 引入一个模块 stack browser
// 4.js 执行权 内存之中
// 去硬盘走一遭 有一段路程
// 异步
const fs = require('fs'); // fs fileSystem  硬盘 node 内置的模块
fs.readFile('./1.js', function(err, data) {
    console.log(data.toString());
}) // 耗时
console.log('222222222'); // 同步