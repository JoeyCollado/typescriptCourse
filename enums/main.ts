//enums = restricting choice with values you want to offer

/*
const aisle = 0;
const middle = 1;
const windows = 2;

if(seat === aisle){
    console.log("sit in aisle")
}
*/  

//example
enum seatChoice {
    aisle,
    middle,
    windows
}

const seat = seatChoice.aisle
//