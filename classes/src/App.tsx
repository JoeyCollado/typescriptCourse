
class User{

  email:string
  name:string
  readonly city: string = "manila"

  constructor(email: string, name: string){
    this.email = email;
    this.name = name;
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
