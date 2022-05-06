// 如何去重
const array = [1,2,3,5,1,5,9,1,2,8];// 有重复项

const uniqueArray = (arr) => {
    let res = [];
    // 以空间换时间
    let map = {}; // 对象   k:v
    for (let i = 0; i< arr.length; i++) {
        let temp = arr[i];
        // console.log(temp);
        if (!map.hasOwnProperty(temp)) {
            map[temp] = i;
            // console.log(map);
            res.push(temp);
        }
        // if(res.indexOf(arr[i]) == -1) {
        //     res.push(temp);
        // }
    }
    return res;
}

console.log(uniqueArray(array));


// 即将加入的， 在数组里出现过
// call 摇人  指定函数this -> 第一个参数
// call 借 
// console.log(typeof array, Object.prototype.toString.call(array));
// console.log(Array.isArray(array));