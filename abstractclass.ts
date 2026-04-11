// class Takephoto{
//     constructor(
//         public carmemode: string,
//         public filter: string

//     ){}

// }

// const Ahmed = new Takephoto("test", "test")

abstract class Takephoto{ // no new object can be created 
    constructor(
        public carmemode: string,
        public filter: string

    ){}

   abstract getSepia(): void // cannot have implementation here cause only defination of methods can be allowed in abstract


   getReeltime(): number{
    //complex calculation
   return 9;
   }

}

//const Ahmed = new Takephoto("test", "test") not valid 

class Instagram extends Takephoto{

    constructor(
        public cameramode: string,
        public filter: string,
        public burst: number
    ){
        super(cameramode,filter) // if u want to use it then this is must super(parameters)
    }
    getSepia(): void {
        console.log("sepia");
    }

}

const Ahmed = new Instagram("test", "test", 6) // this is valid
Ahmed.getReeltime() // i can use this method here 

export{}