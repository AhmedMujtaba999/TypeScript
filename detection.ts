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
function isFish(pet: Fish | Bird) : pet is Fish{ // type narrowing  really good syntax
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

interface Circle{
    kind : "circle", 
    radius : number
}

interface Square{
    kind: "square",
    side: number 
}

interface Rectangle{
    kind: "rectangle",
    length: number, 
    width: number
}


type Shape = Circle | Square

function getTrueshape(shape: Shape){
    if(shape.kind ==="circle"){
        return Math.PI * shape.radius **2
    }
    return shape.side * shape.side
}


 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      const _defaultCheck: never = shape; // type never is never being used ...
      return _defaultCheck; // exhaustic check 
  }
}