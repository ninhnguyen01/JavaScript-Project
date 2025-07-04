const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return(typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(null))

interface BoolCheck<T> {
    value: T,
    is: boolean,
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if ((Array.isArray(arg) && !arg.length) && (isObj(arg) && !Object.keys(arg as keyof T).length)) {
        return { value: arg, is: false}
    }

    return { value: arg, is: !!arg}
}

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject("John")
console.log(store.state)
store.state = 'Han'

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = (['Han', 42, true])
console.log(myState.state)