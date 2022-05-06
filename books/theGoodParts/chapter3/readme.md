# The Good Parts

## 对象

### JS 数据类型
    - 简单类型
        1. 数值类型 number   JS 只有数值类型，JS不太适合复杂数据运算
        JS处理小数时不够精确
        0.1 + 0.2 != 0.3
        2. 字符串类型 string ''   ""   不严格
        3. undefined
            - JS是弱类型，申明变量可以不指定类型
            - JS变量的类型由值决定，变量类型可变
                == 值相等就好  === 恒等   值相等之外，类型也相等
            - 变量申明之后，赋值之前，类型为undefined
        4. 布尔值
            boolean   true|false
        5. null
            
    - 复杂数据类型
        复杂的就是对象 Object

### JS 语言关键字
    let  变量
    const  常量
    typeof  获得变量的数据类型