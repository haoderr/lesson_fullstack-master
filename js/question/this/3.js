var obj = {
    // es6 对象字面量的简写方式
    hi() {
        // this 对象的方法调用 obj
        // 
        console.log(this,'111');
        // 返回值是函数， 高阶函数
        // 是个箭头函数
        return ()=>{
            console.log(this,'555');
        }
    },
    sayHi() {
        return function() {
            console.log(this,'222');
            return ()=> {
                console.log(this,'333');
            }
        }
    },
    say: ()=>{
        console.log(this,'444');
    }
}

// const func = obj.hi;// 赋值  // 普通函数
// // func(); // 调用方式是普通函数
// 返回  箭头函数时  this -> window
// const innerfunc = func(); // 
// innerfunc();
// 返回  箭头函数时 this  -> obj
obj.hi()()


// let hi = obj.hi();
// hi();
// let sayHi = obj.sayHi();
// let fun1 = sayHi();
// fun1();
// obj.say();