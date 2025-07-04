"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(null));
const checkBoolValue = (arg) => {
    if ((Array.isArray(arg) && !arg.length) && (isObj(arg) && !Object.keys(arg).length)) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = 'Han';
const myState = new StateObject([15]);
myState.state = (['Han', 42, true]);
console.log(myState.state);
