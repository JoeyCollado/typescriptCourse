function add(num: number): number{
    return num + 2
    //return "hello"  //not allowed
}
function getUpper(val: string){
    return val.toUpperCase()
}

function signUp(name:string, email:string, password:number, isPaid:boolean){
    
}

let loginUser = (name:string, email:string, isPaid:boolean = false) => {} //false is a default value

/*
function getVal(myVal: number): string{
    if(myVal > 5){
      return true
    }
    return "String"
}
*/

//arrow function
const getHello = (s: string): string => {
    return ""
}

const heroes = ["joey", "aibert", "collado"]

heroes.map(hero => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

add(5)
getUpper("burat")
signUp("joey", "DSafwear", 123213, true)
loginUser("f", "asda", )

export{}