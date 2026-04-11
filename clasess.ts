class CUser{

    private _courseCount =1 
  public email : string =" we need to initilise this" // varaible 
  private id: number = 34 //varaible
  constructor( public gmail: string, public emailid: number){
  }

  //private methods 

  private deletetoken(){
    console.log("Token deleted");
  }

  //getter to get the value
   get getAppleEmail(): string{
        return `apple${this.email}`
    }
  // getter to get the coursecount private
    get courseCount() : number {
        return this._courseCount
    }

    //setter to modify the value or update

    set courseCount(courseNum : number) { // setter cannot have any datatype
      if(courseNum <=1){
        throw new Error("course count should be more than 1")
      }
      this._courseCount =courseNum
    }
}
const ali = new CUser("hi", 667);
  

let value =ali.courseCount //getter 
ali.courseCount = 34; //setter
console.log(ali.getAppleEmail);

 
export{}
