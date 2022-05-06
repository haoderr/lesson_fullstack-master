const city = {
    name: '南昌县',
    population: '100万'
};
const location = {
    longitude: '115.941247',
    latitude: '28.555535'
}
// es6 reset 运算符 ...args
    // ...展开运算符
const hometown = {
    ...city,
    ...location
}
console.log(hometown);