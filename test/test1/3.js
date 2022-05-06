// == 类型转换 ===    简单数据类型
console.log(0 == 0); // true
console.log(-0 == +0); // true
console.log(-0 === +0); // true
console.log( 1 == "1" ); // 相等判断的同时，先去做了类型的转换 true
console.log( 1 === "1" ); // 相等判断的同时，不会去做类型的转换 false
console.log(1 == true); // 谁转换为谁要有一个规则。
if (3) {
    console.log('--------------')
}
console.log(0 == false);
console.log(null == undefined);
console.log(null === undefined);
console.log({} == {}); // false