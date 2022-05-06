# JS 送花
## talk in JS

1. js 运行在浏览器代理中（url） ，宿主环境（window全局对象）
    - typeof window  对象 生而知之
    - a b name  全局作用域
    - c 生命在函数中 函数 局部作用域

- es6 let const 和 var
    1. 相同 属于声明所在的作用域
        直接用变量名来直接访问
        a，
        b，
        name

    2. var 会自动挂载在 window 对象上
        其实是副作用，不太对的，
        window.a   The Bad Parts   不好的
        以后就不用了吧 let 可以完全替代

    3. let const 不会挂载在 window 对象上

    4. const 是常量 值不可以修改
        1. 如果是简单数据类型， 值不能改变
        2. 如果是复杂数据类型， 值可以变，但是类型不能变