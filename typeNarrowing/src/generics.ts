

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

//identityFour<Bottle>({}) //passing type that we created

function getSearchProducts<T>(products: T[]): T{ //define 
    //do some database operations
    const myIndex = 3
    return products[myIndex]
}

//writing same function but with arrow function
const getMoreSearchProducts = <T,>(products: T[]): T => { //comma is a normal convetion to use for people using reacts it just tells the computer that its not a jsx syntax but a generic
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

identityOne(1)
identityTwo(2)
identiyThree(3)
identityFour(4)