//interface = 
//type      = 


//interface = identical to type

//
interface User{
    email: string,
    userId: number,
    googleId?: string //? = means optional
    readonly dbID: number //not changeale
    //function
    startTrail: () => string
    //better way to write function in interface
    startTrial(): string
    getCoupon(coupun: string, value: number): number
}

//reopening of interface   = allow us to modify existing interface / inject values  
interface User{
    githubToken: string
}

//inheritance of interface = get all properties of existing interface
interface Admin extends User{   //you can extend as much interface as you want
    role: "admin" | "ta" | "learner"
}

const joey: Admin = {dbID: 22, email: "joe.com",
userId: 3131,
githubToken: "github",
role: "admin",
//1
startTrail: () => {
    return "trail started"
},

//2
startTrial: () => {
    return "trail started"
},

//3
getCoupon: (name: "joecoup", off: 10) => {
    return 10
}
}

joey.email = "joey.com"
//