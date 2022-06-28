/**
 *3,5,6法
 * 1.npm i -g typescript 
 * 2.tsc --init 生成tsconfig配置文件
 * 3.修改为 "outDir": "./js",      
 * 4.终端-运行任务-ts-监视ts
 */
// 字符型
let str:string = 'ts666'  
// 数字型
let num:number = 999
// 数组类型
let arr:string[]=['js','java']  
let arr2:number[]=[3,5,6]
let arr3:Array<number> = [6,7,8,9,8]
// 元组类型
let arr4:[string,number,boolean] = ['hh',22,false]
let arr5:[string,number,boolean] = ['hh',22,false]
// 枚举类型 enum
enum flag {pay = 0,nopay = 1}
let status1:flag = flag.pay
// console.log(status);
// 任意类型 any
let buff:any  = 1
// undefined
let option:undefined = undefined
let obj:undefined | number = 9
// null
let air:null = null
let air2:string | null = 'str'
// void 
function funname():void {
    // console.log('11');
}
funname()
function name1():number {
    return 9
}
name1()

//函数传参
// 传参有返回值
function params():string {
    return 'str'
}
console.log(params());

// 没有返回值
function params2():void {
    console.log(999999999);
}
params2()

// 方法可选参数  ? 可选参数要放到形参后面(str:string, arr?:string)
function namemsg(str1:string,str2?:number) :string{
    // return `${str1} --- ${str2}`
    if(str2){
        return `${str1} --- ${str2}`
    }else{
        // return str2 //报错，
        return str1
    }
}
console.log(namemsg('hh',21));
console.log(namemsg('hh'));

// 默认参数 形参传入值(str1,str2:number = 3)
function default1(str3:string,num1:number=9):string {
    return `${str3}----${num1}`
}
console.log(default1('age',9));//age --- 9
console.log(default1('age',99)); //age ---99

// 剩余参数
function low(a:number,b:number,...res:number[]) {
    let sum:number = 0
    for(let i = 0 ; i < res.length ; i++){
        sum += res[i]
    }
    return sum + a + b  //a=1，b=2 ...res = 3,4
}
console.log(low(1,2,3,4));

// ts的重载
function argin(strr1:string):string;
function argin(strr1:string,name:number):string;
function argin(strr1:string,name:number):number;
function argin(strr1:string,name?:any):any{
   if(name){
    return strr1 + name
   }else{
    return strr1
   }
}
console.log(argin('dsg'));

// 箭头函数 
