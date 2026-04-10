let score: number | string = 33;

score = 44
score = "55"

type User = {
    name: string,
    id: number

}
type Admin = {
    username: string,
    id: number
}

let ahmed: User | Admin = { name: "ahmedd", id: 334 } // uninon of customized type

ahmed = { username: "titi", id: 345 }


// function getDbId(id: number|string){
//     console.log('DB id is: ${id}');
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }

}
// array

const data: number[]=[1,2,3,4]
const data2: string[] =["1","2", "3"]
const data3: (string | number | boolean)[] = ["1", 2, false] //coorect way to define the union array 
//const data3: string[] | number[] = ["1", 2]  it gives an error the syntac string[] | number[] means 
// it can either hve string or else numebr in array so the top on is correct way if u want to have mixed
// type array

let pi: 3.14=3.14 // strictly to have only 3.14 as value

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
//seatAllotment = "crew" // if one want to override the value other than define that it is not allowed


export { }