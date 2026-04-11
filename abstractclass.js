// class Takephoto{
//     constructor(
//         public carmemode: string,
//         public filter: string
//     ){}
// }
// const Ahmed = new Takephoto("test", "test")
class Takephoto {
    carmemode;
    filter;
    constructor(carmemode, filter) {
        this.carmemode = carmemode;
        this.filter = filter;
    }
    getReeltime() {
        //complex calculation
        return 9;
    }
}
//const Ahmed = new Takephoto("test", "test") not valid 
class Instagram extends Takephoto {
    cameramode;
    filter;
    burst;
    constructor(cameramode, filter, burst) {
        super(cameramode, filter); // if u want to use it then this is must super(parameters)
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const Ahmed = new Instagram("test", "test", 6); // this is valid
Ahmed.getReeltime(); // i can use this method here 
export {};
