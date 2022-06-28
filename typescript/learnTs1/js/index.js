"use strict";
/**
 *3,5,6法
 * 1.npm i -g typescript
 * 2.tsc --init 生成tsconfig配置文件
 * 3.修改为 "outDir": "./js",
 * 4.终端-运行任务-ts-监视ts
 */
// 字符型
let str = 'ts666';
// 数字型
let num = 999;
// 数组类型
let arr = ['js', 'java'];
let arr2 = [3, 5, 6];
let arr3 = [6, 7, 8, 9, 8];
// 元组类型
let arr4 = ['hh', 22, false];
let arr5 = ['hh', 22, false];
// 枚举类型 enum
var flag;
(function (flag) {
    flag[flag["pay"] = 0] = "pay";
    flag[flag["nopay"] = 1] = "nopay";
})(flag || (flag = {}));
let status1 = flag.pay;
// console.log(status);
// 任意类型 any
let buff = 1;
// undefined
let option = undefined;
let obj = 9;
// null
let air = null;
let air2 = 'str';
// void 
function funname() {
    // console.log('11');
}
funname();
function name1() {
    return 9;
}
name1();
//函数传参
// 传参有返回值
function params() {
    return 'str';
}
console.log(params());
// 没有返回值
function params2() {
    console.log(999999999);
}
params2();
// 方法可选参数  ? 可选参数要放到形参后面(str:string, arr?:string)
function namemsg(str1, str2) {
    // return `${str1} --- ${str2}`
    if (str2) {
        return `${str1} --- ${str2}`;
    }
    else {
        // return str2 //报错，
        return str1;
    }
}
console.log(namemsg('hh', 21));
console.log(namemsg('hh'));
// 默认参数 形参传入值(str1,str2:number = 3)
function default1(str3, num1 = 9) {
    return `${str3}----${num1}`;
}
console.log(default1('age', 9)); //age --- 9
console.log(default1('age', 99)); //age ---99
// 剩余参数
function low(a, b, ...res) {
    let sum = 0;
    for (let i = 0; i < res.length; i++) {
        sum += res[i];
    }
    return sum + a + b; //a=1，b=2 ...res = 3,4
}
console.log(low(1, 2, 3, 4));
function argin(strr1, name) {
    if (name) {
        return strr1 + name;
    }
    else {
        return strr1;
    }
}
console.log(argin('dsg'));
// 箭头函数 
