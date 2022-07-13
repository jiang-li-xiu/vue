/*
 * @Descripttion:
 * @Author: JLX
 * @Date: 2022-07-01 17:01:41
 * @LastEditors: JLX
 * @LastEditTime: 2022-07-04 10:27:41
 */
console.log('Hello TS');
// 定义变量a类型为number
var a;
a = 10;
// a = 'hello' //报错
function sum(a, b) {
    return a + b;
}
var result = sum(123, 456);
console.log(result);
// 联合类型 连接多个类型
var b;
b = 'male';
b = "female";
var c;
// any表示 任意类型 相当于对该变量关闭了ts的类型检测
var d;
// 声明变量不指定类型 (隐式any)
// let d;
// unknown表示未知类型的值 类型安全的any
var e;
var s;
// d的类型是any,可以赋值给任意变量
// s = d
// 不能将类型“unknown”分配给其他类型 类型安全的any
// s = e
// 解决方式一
if (typeof e === 'string') {
    s = e;
}
// 二：类型断言，可以用来告诉变量的实际类型
// 语法：
s = e;
s = e;
// 指定返回类型
function fn() {
    return false;
}
// void用来表示空，表示没有返回值
function fn1() {
}
// never表示永远不会返回结果 连undefined都没
function fn2() {
    throw new Error('报错');
}
// 
var f;
// {} 指定对象中可以包含哪些属性 在属性后加上？，表示属性是可选的
var ff;
ff = { name: '' };
// [propName: string]: any表示任意类型的属性
var cc;
cc = { name: '名字', age: 18, gender: '男' };
/**
 * 设置函数结构的类型声明
 * 语法：（形参：类型，...）=>返回值
 */
var dd;
dd = function (n1, n2) {
    return n1 + n2;
};
/**
 * 数组类型声明
 * 类型[]
 * Array<类型>
 */
// 数组 string[]字符串数组
var ee;
// number[] 数值数组
var num;
// 等同
var g;
/**
 * 元组： 固定长度的数组
 * 语法：[类型，类型...]
 */
var h;
h = ['hello', 'hi'];
/**
 *  enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '名字',
    gender: Gender.male // 0:女，1：男
};
console.log(i.gender === Gender.male);
// let i: { name: string, gender: 0|1 }
// i = {
//   name: '名字',
//   gender: 0// 0:女，1：男
// }
// &表示同时 两个同时满足
var j;
j = { name: 'mx', age: 10 };
var k;
var m;
