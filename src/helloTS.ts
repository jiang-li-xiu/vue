/*
 * @Descripttion: 
 * @Author: JLX
 * @Date: 2022-07-01 17:01:41
 * @LastEditors: JLX
 * @LastEditTime: 2022-07-05 15:38:05
 */
console.log('Hello TS')

// 定义变量a类型为number
let a: number;
a = 10;
// a = 'hello' //报错


function sum(a: number, b: number): number {
  return a + b
}
let result = sum(123, 456)
console.log(result);

// 联合类型 连接多个类型
let b: 'male' | 'female'
b = 'male'
b = "female"

let c: boolean | String

// any表示 任意类型 相当于对该变量关闭了ts的类型检测
let d: any
// 声明变量不指定类型 (隐式any)
// let d;


// unknown表示未知类型的值 类型安全的any
let e: unknown

let s: String
// d的类型是any,可以赋值给任意变量
// s = d
// 不能将类型“unknown”分配给其他类型 类型安全的any
// s = e

// 解决方式一
if (typeof e === 'string') {
  s = e
}
// 二：类型断言，可以用来告诉变量的实际类型
// 语法：
s = e as string
s = <string>e

// 指定返回类型
function fn(): boolean | number {
  return false
}

// void用来表示空，表示没有返回值
function fn1(): void {
}

// never表示永远不会返回结果 连undefined都没
function fn2(): never {
  throw new Error('报错')
}

// 
let f: object
// {} 指定对象中可以包含哪些属性 在属性后加上？，表示属性是可选的
let ff: { name: String, age?: number }
ff = { name: '' }

// [propName: string]: any表示任意类型的属性
let cc: { name: string, [propName: string]: any }
cc = { name: '名字', age: 18, gender: '男' }


/**
 * 设置函数结构的类型声明
 * 语法：（形参：类型，...）=>返回值
 */
let dd: (a: number, b: number) => number

dd = function (n1, n2): number {
  return n1 + n2
}


/**
 * 数组类型声明
 * 类型[]
 * Array<类型>
 */

// 数组 string[]字符串数组
let ee: string[]
// number[] 数值数组
let num: number[]
// 等同
let g: Array<number>


/**
 * 元组： 固定长度的数组
 * 语法：[类型，类型...]
 */
let h: [string, string]
h = ['hello', 'hi']


/**
 *  enum 枚举 
 */
enum Gender {
  male = 0,
  female = 1
}
let i: { name: string, gender: Gender }
i = {
  name: '名字',
  gender: Gender.male// 0:女，1：男
}
console.log(i.gender === Gender.male);

// let i: { name: string, gender: 0|1 }
// i = {
//   name: '名字',
//   gender: 0// 0:女，1：男
// }

// &表示同时 两个同时满足
let j: { name: string } & { age: number }
j = { name: 'mx', age: 10 }


// 类型的别名
type myType = 1 | 2 | 3 | 4
let k: myType
let m: 1 | 2 | 3 | 4

// strictNullChecks 严格的检查空值
//  box1为空会报错
let box1 = document.getElementById('box1');
box1?.addEventListener('click', function () {
  alert('11')
})