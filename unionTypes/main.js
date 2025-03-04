//union types = combination of two or three or more data that we can include into a variable or array
//1
var score = 33;
// because of union type we can now assign score variable to three different data types
score = 44;
score = "three";
score = false;
var joey = { name: "joey", id: 334 };
joey = { username: "j", id: 233 };
//
//3
/*
function getId(id: number | string){
    //api calls
    console.log(`id is: ${id}`);
}
*/
function getId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id++;
    }
}
getId(3);
getId("3");
//
//4
//array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
var data3 = [1, "2", 3, "4"];
//
//5
//strictly assigning value to a variable
var seat;
seat = "aisle";
//seat = "crew" //not allowed
