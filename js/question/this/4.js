var obj = {
    hi: function() {
        console.log(this,'111');
        return ()=>{
            console.log(this,'222');
        }
    },
    sayHi: function() {
        return function() {
            console.log(this,'333');
            return ()=>{
                console.log(this,'444') ;
            } 
        }
    },
    say: ()=>{
        console.log(this);
    }
}

var func = obj.hi;  // 普通函数
// func.call(obj);
// 可以指定this， 并且返回一个新的函数
// bind 为了稍后执行而准备的， 异步
func.bind(obj)()();


let sayHi = obj.sayHi();
let fun1 = sayHi();
fun1();
let fun2 = sayHi.bind(obj)();
fun2();

