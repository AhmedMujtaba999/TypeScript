interface Iuser {
    
    readonly dbid: number
    email: string,
    userid: number,
    googleid?: string,
   //method 1 starttrail : () => string // defining function 
   starttrail?(): string, //method 2 this is actually good // optional fucntion 
   getcoupon(couponname: string, value : number ): number 
}
// same interface same as 1st one this is called re-opening of interface
interface Iuser{
    githubid: string
}

//use of extends and inheritance of Iuser props
interface Admin extends Iuser{
 role: "admin" |"ta"| "learber"// self made literal
}
const ahmed: Admin = {
    dbid: 345,
    email: "ahmed@.com",
    userid: 123,
    role: "admin",
    githubid: "helllo",
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