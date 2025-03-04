

function identityOne(val: string | boolean | number): string | boolean | number{ //valid code
    return val
}

function identityTwo(val: any): any{ //using any bad idea 
    return val
}

function identiyThree<Type>(val: Type): Type{ //using generic
    return val
}

function identityFour<T>(val: T): T{ //shortcut
    return val
}

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({}) //passing type that we created


identityOne(1)
identityTwo(2)
identiyThree(3)
identityFour(4)