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
function PersonalInfo(infor) {
    console.log('NAME: ${infor.name}' + 'Id: ${infor.id}' + "Email:" + infor.email);
    console.log(`NAME: ${infor.name} Id: ${infor.id} Email: ${infor.email}`);
    return { name: "", email: "", id: 2 };
}
PersonalInfo({ name: "Ahmed", email: "hyd@gmail.com", id: 30 });
export {};
