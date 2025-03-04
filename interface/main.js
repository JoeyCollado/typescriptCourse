//interface = identical to type
var joey = { dbID: 22, email: "joe.com",
    userId: 3131,
    //1
    startTrail: function () {
        return "trail started";
    },
    //2
    startTrial: function () {
        return "trail started";
    },
    //3
    getCoupon: function (name, off) {
        return 10;
    }
};
joey.email = "joey.com";
//
