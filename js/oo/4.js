// 继承
// 父类
var Animal = {
    createNew: function() {
        var animal = {}
        animal.sleep = function() {
            console.log('睡觉觉');
        }
        return animal;
    }
}
// 动物的子类， 猫
var Cat = {
    createNew: function(name) {
        var cat = Animal.createNew();
        cat.name = name;
        var sound = '喵喵喵';// 私有
        cat.makeSound = function() {
            console.log(sound);
        }
        return cat;
    }
}

var tom = Cat.createNew('Tom');
console.log(tom.name);// 公共属性public   私有属性private   保护protect     静态static
// console.log(tom.name);// 私有属性private
tom.makeSound();
tom.makeSound();
tom.sleep();
