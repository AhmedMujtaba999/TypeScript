const User = {
    name: "Ahmed",
    email: "ahmed@gmail.com",
    isActive: true
};
function createUser({ name, isPaid }) { }
// bad beahviour of js
let newUser = { name: "ahmed", isPaid: false, email: "higy@.com" };
//createUser({name: "hi", isPaid: true, email: "hi@com"})
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 345 };
}
export {};
