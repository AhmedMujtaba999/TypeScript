let score = 33;
score = 44;
score = "55";
let ahmed = { name: "ahmedd", id: 334 }; // uninon of customized type
ahmed = { username: "titi", id: 345 };
// function getDbId(id: number|string){
//     console.log('DB id is: ${id}');
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// array
const data = [1, 2, 3, 4];
const data2 = ["1", "2", "3"];
const data3 = ["1", 2, false]; //coorect way to define the union array 
//const data3: string[] | number[] = ["1", 2]  it gives an error the syntac string[] | number[] means 
// it can either hve string or else numebr in array so the top on is correct way if u want to have mixed
// type array
let pi = 3.14; // strictly to have only 3.14 as value
let seatAllotment;
seatAllotment = "aisle";
export {};
