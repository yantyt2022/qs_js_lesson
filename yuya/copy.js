// const arr = [1,2,3];
// Array.prototype.concat 可以让数组进行合并，返回一个新的数组
// const arr2 = arr.concat();
// arr2 引用arr 
// arr2[0] = 6;
// arr[0] = 8;
// console.log(arr2,arr);

// var arr = ['old',1,true,null,undefined];
// var new_arr = arr.concat();
// new_arr[0] = 'new';
// console.log(new_arr);
// console.log(arr);
// 基本的类型

var arr = new Array(6);
// console.log(arr.length);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";
arr[3] = "James";
arr[4] = "Adrew";
arr[5] = "Martin";
const newArr = arr.slice();
newArr[0] = '芬芬';
// console.log(arr.slice(2));
// slice() 是数组里常用的API，切割
// console.log(newArr);
// 借用数组concat合并，slice切割，返回新数组的方式来实现浅拷贝
// console.log(arr.slice(2,4));
// console.log(arr.slice(-4,-1));
// js 有一个数组方法，它可以实现删除数组的项目，并且加入
console.log(arr);
arr.splice(2,0,'芬芬');//从某个下标开始，切几个，在某个下标那里插入元素
// 数组的方法有两派，改变原数组与否
console.log(arr);