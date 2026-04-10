//const user: (string| number| boolean)[]=[1, "hub", false] // order is not matter no strict sereis of type is neccseary
let tUser : [string, number , boolean] // tuple

//tUser =[true, "hih", 34] // order matters so erros

tUser= ["hi", 67, false] // ordered of array with  string num bool

let rgb: [number, number , number]= [355, 344, 456]

type User=[number, string ]
const newUser: User =[ 22, "example@goolgle.com"]

// wrong about tuple
newUser[1]= "helloworld" // manually u can chnage the value 

// newUser.push(true) not possible in new versions

export{}