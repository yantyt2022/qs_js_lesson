const name = "aaa bbb ccc";
console.log(name);
// 将此字符串里的每个单词的首字母变大写
// \b 表示单词的开头  \w表示单词的字符
const str2 = name.replace(/\b\w+\b/g, function(word){
    // console.log(word);
    return word.substring(0,1).toUpperCase() + word.substring(1);
})
console.log(str2);
//---------------------------------
//方法一
// function titleCase(s) {  
//     return s.toLowerCase().replace(/\b([\w|']+)\b/g, function(word) {  
//         return word.replace(word.charAt(0), word.charAt(0).toUpperCase());  
//     });  
// }  
// console.log(titleCase(name));
//--------------------------
//方法二
// function titleCase(s) {  
//     return s.toLowerCase().split(/\s+/).map(function(item, index) {  
//         return item.slice(0, 1).toUpperCase() + item.slice(1);  
//     }).join(' ');  
// }  
// console.log(titleCase(name));
//----------------------------------------