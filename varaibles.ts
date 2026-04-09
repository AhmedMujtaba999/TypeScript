let greetings: string = "Ahmed Mujtaba Ali";
console.log(greetings);

// mynum.touch(); // not allowed as it is a number type variable
//greetings.toLowercase(); // not allowed toLowerCase is correct method name
let userId =334455.5; // allowed as number type variable can hold both integer and floating point values
userId.toFixed(2); // allowed toFixed is a method of number type variable

//userId= "ahmed"; //logically typescript know userid is number so u cant assign string now 

//boolean

let isLoggedIn: boolean= true;

// type is Any // not a good practice to use any type as it defeats the purpose of using typescript
let hero;
function getHero(){
    return "Superman";  
}
hero = getHero();

export {}