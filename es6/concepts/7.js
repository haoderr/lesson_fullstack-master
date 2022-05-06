let var1 = {name : '杨仲鑫'};
let var2 = var1; // 不是值，给的是是地址
var2.name = '啦啦啦';
console.log(var2);
console.log(var1);// 直觉不一样，