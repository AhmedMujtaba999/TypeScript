function addTwo(num: number ){
  //  num.toUpperCase(); // not allowed as toUpperCase is a method of string type variable not number type variable
    return num+2;
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




export{}