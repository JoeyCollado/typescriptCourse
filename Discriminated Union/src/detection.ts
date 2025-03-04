function detectTypes(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase()
        
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("please provide id")
        return
    }
    id.toLowerCase()
}


//typeof = type guard


//in
interface User {
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){ //narrowing interface using in
        return account.isAdmin
    }
}

//instanceOf = just like typeof
//instaceOf = check an instance of some class 

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

//type predicates

type Fish = {switm: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).switm !== undefined 
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet 
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}

//discriminated union
interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square",
    sides: number
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    return shape.sides * shape.sides
}

//exhaustive check

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.sides * shape.sides

        case "rectangle":
            return shape.length * shape.width

        default: 
            const defaultShape: never = shape //mandatory
            return defaultShape
    }
}
