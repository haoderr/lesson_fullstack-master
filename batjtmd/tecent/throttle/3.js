function sayHi() {
    console.log('Hello,', this.name);
}
var person2 = {
    name : 'xiaobai',
    sayHi : sayHi
}

var person1 = {
    name : 'xiaohei',
    friend : person2
}
// 你不知道的Javascript
// 当函数作为对象的方法时， this指向对象， 当前对象是 person2
var obj = person1.friend;
obj.sayHi();
person1.friend.sayHi();