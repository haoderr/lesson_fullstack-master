const forest = {
    location: 'Sweden',
    animals: 3,
    animalsTypes: ['Lions', 'Tigers', 'Bears']
};
console.log(forest.nickname);
const location = 'dfdf';
// es6 结构
const {location: lo, animals, animalsTypes, nickname= '未命名'} = forest;
conaole.log(lo, nickname);

const [lions, tigers, bears] = animalsTypes
console.log(lions, tigers, bears);