//union types = combination of two or three or more data that we can include into a variable or array

//1
let score: number | string | boolean = 33
// because of union type we can now assign score variable to three different data types
score = 44
score = "three"
score = false
//


//2
type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let joey: User | Admin = {name: "joey", id: 334}

joey = {username: "j", id: 233}
//

//3
/*
function getId(id: number | string){
    //api calls
    console.log(`id is: ${id}`);
}
*/

function getId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
    else{
        id++
    }
}

getId(3)
getId("3")
//

//4
//array
const data: number[] = [1,2,3,4]
const data2: string[] = ["1","2","3","4"]
const data3: (number | string)[] = [1,"2",3,"4"]
//

//5
//strictly assigning value to a variable
let seat: "aisle" | "middle" | "window"

seat = "aisle"
//seat = "crew" //not allowed