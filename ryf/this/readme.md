# Javascript 的this 底层原理
 

## 问题的来源是什么？
    1. 同一个函数， 运行后this 指向不一样
    2. 不同的运行环境， 带来不同的运行环境
        - 箭头函数  没有this  
        - 普通函数  严格模式  全局或者是undefined   不够明显
        - 构造函数  new  |  普通函数  麻烦
        - call apply bind
        - 事件处理函数 this 指向event.target

- 同一个函数（内存之中，同一个函数体只有一个内存分配所在）
- 不同环境（上下文）里的不同运行方式
    1. 全局变量， 普通函数， 
    2. obj.foo 属性， 指向了函数  对象的方法

- 对象方法 + 引用式赋值 1.html 最根正苗红的例子