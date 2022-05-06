// 函数， 判断文件是否是图片文件


/**
 * 代码的最重要？ 是功能吗？ 在学校是 
 * 可读性
 * @param {string} file  文件名
 * @return { boolean } 是否是图片 
 * @author zpj 
 * @data 2022-3-29
 */
function checkIsImage(file){
    // console.log(file);
    // file 不能为空
    if (!file){
        return false;
    }
    // ['a', 'txt']
    // if (file.split('.')[1] == 'jpg'){
    //     return true;
    // };
    let imgFormats =['jpg','gif','jpeg','pen','svg','webp','awebp'];
    // 三元运算符
    return imgFormats.indexOf(file.split('.')[1]) == -1 ? false : true;
    // if (pos == -1){
    //     return false;
    // }else{
    //     return true;
    // }


    // return false;
}
console.log(checkIsImage('a.txt'));
