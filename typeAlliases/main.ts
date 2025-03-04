
type User = {
    name: string;
    email: string;
    isActive: boolean;
}


function createUser(user: User){
    return {name: "", email: "", isActive: true}
    
}

createUser({name: "", email: "", isActive: true})

export {}