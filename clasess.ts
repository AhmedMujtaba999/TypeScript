class cUser{

    private _courseCount =1 
  public email : string =" we need to initilise this" // varaible 
  private id: number = 34 //varaible
  constructor( public gmail: string, public emailid: number){
  }

  //getter to get the value
   get getAppleEmail(): string{
        return 'apple${this.email}'
    }
  // getter to get the coursecount private
    get courseCount() : number {
        return this._courseCount
    }

    //setter to modify the value or update

    set courseCount(courseNum) { // setter cannot have any datatype
      if(courseNum <=1){
        throw new Error("course count should be more than 1")
      }
      this._courseCount =courseNum
    }
}
const ali = new cUser("hi", 667);
  
 
export{}

