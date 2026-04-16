function detecttype(val: number | string ){

    if(typeof val === "string"){
         return val.toLowerCase
    }
    return val+3
}

function provideId(id: string | null){
    if(!id){
        console.log("please provide id");
    }
    id?.toLowerCase()
}


function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
// instanceof keyword usage 

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
               

  } else {
    console.log(x.toUpperCase());
               

  }
}
type Fish = {swim: ()=> void};
type Bird ={ fly: ()=> void};
function isFish(pet: Fish | Bird) : pet is Fish{ // really good syntax
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return " fish food"
    }else{
        pet 
        return " Bird food"
    }
}