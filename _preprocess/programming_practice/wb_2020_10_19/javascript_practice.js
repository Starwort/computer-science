// Activity 1
document.getElementById("activity_1").innerText = "This is the second paragraph";

// Activity 2
document.write("This is the third paragraph");

// Activity 3
(() => alert("Anonymous function"))();

// Activity 4
var activity_4 = () => document.querySelector("#activity_4").innerText = "Changed!";

// Activity 5
var activity_5 = () => document.querySelector("#activity_5").innerText = "Ok but how is this one really different";

// Activity 6
/**
* @param {Number} time The hour
*/
function clock(time) {
    if (time < 0 || time >= 24) {
        alert("Invalid time");
    } else if (time >= 12) {
        alert("Good afternoon");
    } else {
        alert("Good morning");
    }
}

// Activity 7
/**
* @param {Number} date The month
*/
function calendar(date) {
    if (date > 12 || date < 1 || date % 1 !== 0) {
        alert("Invalid date!");
    }
}

// Activity 8
var months_n_days = {
    28: ["February"],
    29: ["February"],
    30: ["April", "June", "September", "November"],
    31: ["January", "March", "May", "July", "August", "October", "December"],
}

function fetch_months(month) {
    console.log(`${month}: ${months_n_days[month].join("\n")}`);
}

for (let i of [28, 29, 30, 31]) {
    fetch_months(i);
}

// Activity 9
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// Activity 10
let cars = ["BMW", "Volvo", "Saab", "Ford"];

for (let car of cars) {
    if (car[0] < 'E') {
        console.log(car);
    }
}

// Activity 11
let car;
while (car = cars.shift()) {
    if (car != "Ford") {
        console.log(car);
    }
}