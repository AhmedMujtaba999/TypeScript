
// without type alias
let user1: {name: string, age: number} = {
    name: "Ahmed",
    age: 25
}

let user2: {name: string, age: number} ={
    name: "Ali",
    age: 27
}

//with type alias

type User ={ name : string, age: number}; // kind of value

let user3: User ={
    name : "Sara",
    age: 50
}

let user4: User={
    name: "rohit",
    age: 26
}

let user5 : User ={
    name: "rohan",
    age: 9
}

// type alias for functions 
type Add = (a: number, b: number) => number;// pure typescript syntax

let add: Add= (a,b) => a+b;
let subtract: Add= (a,b)=> a-b;
let multiply: Add =(a,b)=> a*b;
let divide: Add = (a,b) => a/b;

console.log(add(5,10)); // Output: 15
console.log(subtract(10,5)); // Output: 5
console.log(multiply(5,10)); // Output: 50
console.log(divide(10,5)); // Output: 2