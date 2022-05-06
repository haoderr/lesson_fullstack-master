var obj = {
    hi: function() {
        console.log(this,'111');
        return ()=>{
            console.log(this,'555');
        }
    },
    sayHi: function() {
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

let hi = obj.hi();
hi();
let sayHi = obj.sayHi();
let fun1 = sayHi();
fun1();
obj.say();