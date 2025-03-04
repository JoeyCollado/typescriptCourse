
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

  private _courseCount = 1; //private property

  readonly city: string = "manila"
  constructor(public email: string,
              public name: string,
            //private userId: string
     ){
  }

  //private methods
  private deleteToken(){
    console.log("token deleted")
  }

  //get is used to get any property
  get getAppEmail(): string{         //getter example
    return  `apple${this.email}`
  }

  get courseCount(): number{ //method to acess private property
    return this._courseCount
  }
  
  set courseCount(courseNum){  //setter don't need type
    if(courseNum <= 1){
       throw new Error("course count should be more than 1");
    }
    this._courseCount = courseNum   //course count updated with the course number you're desigining
  }


}

const joey = new User("joey.com", "joey")

//joey.deleteToken()//can't access private methods



const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
