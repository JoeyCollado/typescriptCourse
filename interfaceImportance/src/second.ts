interface TakePhoto{
    camera: string
    filter: string
    burst: number
}

interface Story{
    createStory(): void
}

class Instagram implements TakePhoto{
    constructor(
        public camera: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story{ //when implementing an interface to your class its' allowed to have one or more property but not less than
    constructor(
        public camera: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log("story is created")
    }
}

//inteface is a guideline that is provided in typescript