//

abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    
    abstract getSepia():  //abstract method
    getReelTime(): number{
        //complex calculation
        return 8
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia")
    }
}

const joey = new Instagram  ("test", "test", 3)

joey.getReelTime()