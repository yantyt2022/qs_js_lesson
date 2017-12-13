const name = "aaa bbb ccc";
console.log(name);
// 将此字符串里的每个单词的首字母变大写
function titleCase(s) {  
    return s.toLowerCase().replace(/\b([\w|']+)\b/g, function(word) {  
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase());  
    });  
}  
console.log(titleCase(name));