interface Iuser {
    
    readonly dbid: number
    email: string,
    userid: number,
    googleid?: string,
   //method 1 starttrail : () => string // defining function 
   starttrail?(): string, //method 2 this is actually good // optional fucntion 
   getcoupon(couponname: string, value : number ): number 
}

const ahmed: Iuser = {
    dbid: 345,
    email: "ahmed@.com",
    userid: 123,
    starttrail: () => { // writing function 
        return "trail started "
    },
    getcoupon: (name : "ahmed ", off: 2334) =>{
        return 20
    }
}

ahmed.email = "hihnh@.com"
//ahmed.dbid = 233 u cannot change the readonly file 

export { }