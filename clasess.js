class cUser {
    gmail;
    emailid;
    _courseCount = 1;
    email = " we need to initilise this"; // varaible 
    id = 34; //varaible
    constructor(gmail, emailid) {
        this.gmail = gmail;
        this.emailid = emailid;
    }
    //private methods 
    deletetoken() {
        console.log("Token deleted");
    }
    //getter to get the value
    get getAppleEmail() {
        return 'apple${this.email}';
    }
    // getter to get the coursecount private
    get courseCount() {
        return this._courseCount;
    }
    //setter to modify the value or update
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const ali = new cUser("hi", 667);
let value = ali.courseCount;
ali.courseCount = 34;
console.log(ali.getAppleEmail);
export {};
