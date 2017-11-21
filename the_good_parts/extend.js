// 继承
// subClass 子类  
// superClass 父类 
function extend(subClass,superClass){
    // 手术 prototype
    // prototype指向
    // 类F 函数就是对象， 类
    var F = function(){}
      F.prototype = superClass.prototype;
      console.log(F.prototype);
    //   js 原型链prototype 对象会沿着原型链一直查找，
    // 找自身对象是否有getName方法，如果没有，
    // 就会沿着这根链找其他对象，是否有方法

    console.log(subClass.prototype.constructor);  
    subClass.prototype = new F();

    //   constructor 构造函数
    // constructor属性 对象完全是由prototyp来指挥
      subClass.prototype.constructor = subClass;
      console.log(subClass.prototype.constructor);
      
    //   静态属性
      subClass.superclass = superClass.prototype;
}

// js 面向对象的继承
// 人类
// Person既是函数，又是构造函数
// 函数是对象的一种，即可执行的对象
// 在js里，函数是一等对象 上天入地
// 表达式 var a = function(){}
// 函数还能作为形参来用  
// 高阶函数 形参 function func(cb){cb();}
// 返回值 返回一个函数
// 基类
function Person(name){
  this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}

// var yt = new Person('严婷');
// console.log(yt.getName());
// 子类
function Author(name,books){
    // 借
    // author类得到属性的设置
    // this -> author 对象指向
    Person.call(this,name);
    this.books = books;
} 
// Author.prototype.getName = function(){
//     return Person.prototype.getName.call(this);
// }
// Person prototype 方法，它都有
// Person的构造函数不能被改掉
extend(Author,Person);

Author.prototype.getBooks = function(){
  return this.books.join(",");
}
var xnz = new Author('倪子红',['我知道的js','js红学','小倪子模式']);
console.log(xnz.getName());
console.log(xnz.getBooks());
