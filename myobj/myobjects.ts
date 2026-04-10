// const User={
//     name: "Ahmed",
//     email: "ahmed@gmail.com",
//     isActive: true                        
// }  


// function createUser({name, isPaid}: {name:string, isPaid: boolean}){}

// // bad beahviour of js
//  let newUser= {name: "ahmed", isPaid: false, email: "higy@.com"}
// //createUser({name: "hi", isPaid: true, email: "hi@com"})

// createUser(newUser)

// function createCourse():{name: string, price:number}{
//     return {name: "reactjs", price:345}
// }


// type info ={
//     name: string, 
//     email: string, 
//     id: number
// }

// function PersonalInfo(infor: info): info{
//     console.log('NAME: ${infor.name}' + 'Id: ${infor.id}' + "Email:" + infor.email);
//     console.log(`NAME: ${infor.name} Id: ${infor.id} Email: ${infor.email}`);
//     return {name:"", email: "", id: 2}

// }

// PersonalInfo({name: "Ahmed",email: "hyd@gmail.com", id: 30 })




// export{}

type User={
   readonly _id: string, // nobody can manupulate the _id as it marked as readonly 
    name: string, 
    email: string, 
    isActive : boolean
    credcardDetails?: number
}

let myUser: User={
    _id: "123",
    name: "ahme",
    email:"hum@gmail.com",
    isActive: false

}

type cardNumber={
    cardnumber: string
}

type cardDate ={
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { // combing existing type and making a new type called as intersection 
    cvv: number 
}

myUser.email="ahmed@gmil.com";
//myUser._id = "user"; not allowed as _id is marked as readonly