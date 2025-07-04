type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[]
type Soloist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber;

let Myname: 'Dave';

let userName: 'Dave' |'John' | 'Amy';
userName = 'Amy';

const add = (a:number, b:number): number => {
    return  a + b;
}

add(2,3)

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg("Hello!");
logMsg(add(a,b));

let subtract = function(c: number, d:number): number {
    return c - d
}

type mathFunction = (e: number, f:number) => number

let multiply: mathFunction = function(e,f) {
    return e * f
}

logMsg(multiply(2, 2))

const addAll =(x:number, y:number, z?:number):number => {
    if (typeof z !== 'undefined') {
        return x + y + z
    }
    return x + y
}

const sumAll =(x:number, y:number, z:number = 2):number => {
    return x + y + z
}

logMsg(addAll(2, 3, 3))
logMsg(sumAll(2, 4))

const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,4))