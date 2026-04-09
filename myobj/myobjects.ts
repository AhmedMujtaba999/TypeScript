const User={
    name: "Ahmed",
    email: "ahmed@gmail.com",
    isActive: true                        
}  


function createUser({name, isPaid}: {name:string, isPaid: boolean}){}

// bad beahviour of js
 let newUser= {name: "ahmed", isPaid: false, email: "higy@.com"}
//createUser({name: "hi", isPaid: true, email: "hi@com"})

createUser(newUser)

function createCourse():{name: string, price:number}{
    return {name: "reactjs", price:345}
}





export{}