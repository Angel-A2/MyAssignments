// 1. Function userProfile
function userProfile(name) {
    console.log("Hello, " + name + "!");
}
userProfile("Angel");

// 2. Arrow function 
const double = (num) => num * 2;
console.log(double(5)); 
// 3. Anonymous function 
setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);

// 4. callback function
function getUserData(callback) {
    setTimeout(function () {
        callback("Callback Function");
    }, 3000);
}

// Calling getUserData with a callback function
getUserData(function (message) {
    console.log(message);
});