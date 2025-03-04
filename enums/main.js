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
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["aisle"] = 0] = "aisle";
    seatChoice[seatChoice["middle"] = 1] = "middle";
    seatChoice[seatChoice["windows"] = 2] = "windows";
})(seatChoice || (seatChoice = {}));
var seat = seatChoice.aisle;
//
