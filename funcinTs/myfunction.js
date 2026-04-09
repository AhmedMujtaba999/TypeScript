function addTwo(num) {
    //  num.toUpperCase(); // not allowed as toUpperCase is a method of string type variable not number type variable
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function singup(name, email, isPaid) {
}
let loginuser = (name, email, isPaid = false) => { };
addTwo(3); // Output: 5
getUpper("Ahmed"); // Output: "HELLO"
singup("Ahmed", "ahmed@example.com", false); // Output: undefined as the function does not return anything and also the parameters are not typed so it accepts any type of values
loginuser("h", "h"); // if u dont provide the 3 value it is working 
export {};
