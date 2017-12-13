// js 全局变量
// 把下面两个放一起是为了减少空间的污染
const Song = {

};
// 立即执行函数的妙用，用来执行对象的封装，能够方便的提供私有的属性或方法，
// 添加下划线，把变量变为私有变量
// 在函数内部再写一个函数就是闭包
const user = (function(){
    let _name = 'sven',  //当一个变量前面由下划线开始，就是私有变量
        _age = 19;
        // 闭包的魔法
    return {
        //形成了闭包 函数运行时的上下文环境
        //构成对user的封装
        getUserInfo : function(){
            return _name + ',年方' + _age ;
        }
    }
})();
// 立即执行函数已经运行，但是它的内部却有返回，这个返回可以在任何时刻被执行
// 上下文环境 context 在函数被立即执行时，闭包函数（白雪公主）就被定义了（被毒死了），
// 立即执行函数里面的引用的变量、函数都可以被调用
// 在闭包的夹层里的变量得永生
console.log(user.getUserInfo());

// !(function(global){
//     global.Teel = {
//         sayHello: function(){
//             console.log("hello world!");
//         }
//     };
// })(window);