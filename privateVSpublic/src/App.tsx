
//private = modifier disable the ability to access outside of class
//public  = everything we don't mark is automatically public

//bad practice
/*
class User{

  public email:string
  name:string
  private readonly city: string = "manila"

  constructor(email: string, name: string){
    this.email = email;
    this.name = name;
  }
}
*/

//better way to write
class User{

  readonly city: string = "manila"
  constructor(public email: string,
              public name: string,
            //private userId: string
     ){
  }
}

const joey = new User("joey.com", "joey")

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
