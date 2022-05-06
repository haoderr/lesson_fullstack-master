// 函数字面量
var add = function (a,b){
    return a + b;
}

// 方法调用模式
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
myObject.increment();
document.writeln(myObject.value);

myObject.increment(2);
document.writeln(myObject.value);

//函数调用模式
var sum = add(3,4);