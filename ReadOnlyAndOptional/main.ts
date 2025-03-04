//


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: Boolean
    creditCardDetails?: number
}

let myUser: User = {
    _id: "2134",
    name: "joey",
    email: "akosij.com",
    isActive: false,
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {  //creating a new type based on the combination of existing types
    cvv: number
}

myUser.email = "akosijoey@gmail.com"
//myUser._id = "notjoey" //not allowed because id is set to read only


export{}