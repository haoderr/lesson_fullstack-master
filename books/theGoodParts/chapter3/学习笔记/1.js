var stooge = {
    "first-name" : "Jerome",
    "last-name" : "Howard"
}
// 对象字面量中的嵌套
var zhangsan = {
    name : "zhangsan",
    age : 22,
    sex : "男",
    hoppy : {
        singer : "jayzhou",
        popmusic : "花海",
        sport : "basketball"
    }
}

// 检索
// 填充默认值
var small = stooge["smallname"]||"{none}";
var city = zhangsan.city||"unknow";

// 更新
stooge.nickname = 'Curly';
// 引用
var x = stooge;
x.nickname = "Curly";
var nick = stooge.nickname;

// 原型
if (typeof Object.beget !== 'function'){
    Object.beget = function(o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.beget(stooge);
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = "Moe";

// 反射
// typeof zhangsan.name  //  "string"
// typeof zhangsan.age   //  "number"

// 枚举
var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];
for (i=0; i<length.properties; i++){
    document.writeln(properties[i] + ':' + 
    another_stooge[properties[i]])
}
// 删除
//another_stooge.nickname  //'moe'
delete another_stooge.nickname;
//another_stooge.nickname  //'Curle'