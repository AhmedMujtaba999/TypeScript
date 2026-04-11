class CUser {
    gmail;
    emailid;
    _courseCount = 1;
    courseCnt = 4;
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
        return `apple${this.email}`;
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
class SubUser extends CUser {
    isFamily = true;
    changeCoursecount() {
        //this._courseCount = 4 //Property '_courseCount' is private and only accessible within class 'CUser'.
        this.courseCnt; // this property can be accessed which extends CUser unlike private 
        // protected modifier can be accessed with in the class and the class which extends it.
    }
}
const ali = new CUser("hi", 667);
let value = ali.courseCount; //getter 
ali.courseCount = 34; //setter
console.log(ali.getAppleEmail);
export {};
