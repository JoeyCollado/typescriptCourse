const score: Array<number> = []
const names: Array<string> = []

// function identity1(val: boolean | number): boolean | number{
//     return val
// }

// function identity2(val: any): any{
//     return val
// }

// function identity3<Type>(val: Type): Type{
//     return val
// }

interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T,valTwo: U): Object{
   return{
    valOne,
    valTwo
   }
}

// anotherFunction(3, {})

//class types

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    type: string
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(products: T){
        this.cart.push(products)
    }
}