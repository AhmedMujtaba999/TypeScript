function addTwo(num: number ): number {
  //  num.toUpperCase(); // not allowed as toUpperCase is a method of string type variable not number type variable
    return num+2;
    //return "hello";
}

function getUpper(val: string){
    return val.toUpperCase();
}

function singup(name: string, email: string, isPaid: boolean){

}

let loginuser = (name: string, email: string,isPaid: boolean= false)=> {}



addTwo(3); // Output: 5
getUpper("Ahmed"); // Output: "HELLO"
singup("Ahmed", "ahmed@example.com", false); // Output: undefined as the function does not return anything and also the parameters are not typed so it accepts any type of values
loginuser("h","h")// if u dont provide the 3 value it is working 
// cause the ispaid is set false as defualt

// function getVal(myVal: number){
//     if (myVal> 2){
//         return true;
//     }
//     return "100 ok";
// }


// arrow function syntax
const getHelo=(s : string ): string => {
    return "heeee";

}

const heros = ["thor", "spiderman", "ironman"]

//const heros= [1,2,3,4]
heros.map((hero): string =>{
    return 'hero is ${hero}'
    //return 1;
})


function conerror(errmsg: string): void{
    console.log(errmsg);
}


function hadleerr(Err: string): never{
    throw new Error(Err);

}

export{}