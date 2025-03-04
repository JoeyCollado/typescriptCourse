
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

  protected _courseCount = 1; //private property = only accessible within the class not outside, protected means it's only accessible within the class and the class that extends to it (sub class)

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

//access modifiers = limit us the ability to access properties and how can we access them
//                 = protected for example

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
      this._courseCount = 4
    }
}

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
