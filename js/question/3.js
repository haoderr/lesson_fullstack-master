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
let sayHi = obj.sayHi();
let fun1 = sayHi();
fun1();

let fun2 = sayHi.bind(obj)();
fun2();