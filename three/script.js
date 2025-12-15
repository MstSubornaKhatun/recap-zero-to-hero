console.log(25); 
// node script.js ==> Enter then output 25

var weight = 43;
console.log(weight);



var isStudent = true;
console.log(typeof isStudent); // output ==> boolean


// number data type 

var a = 9;
var b = 1;
console.log(a+b); // 10
console.log(typeof b); // number


var c = 4.8;
console.log(a+c); // 13.8
console.log(typeof c); // number


var c = parseFloat('33.5')
console.log(a+c);

var s = "60";
console.log(s);
console.log(typeof s); //string



var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total); // 0.30000000000000004
console.log(total.toFixed(2)); // 0.30



// short-hand
//x+=y   x=x+y  x er sathe y joog
var x = 4;
var y = 5;
x += y;

console.log(x); //9


// x++   x=x+1  

var g = 4;
g++;
console.log(g); //6


console.log(40-'20');
console.log('50'+10);


// string
var h = 'Mobarok';
var i = 'Tobarok';
console.log(h+i); // output ==> MobarokTobarok




// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

// Sample Input:
// 1000
// 700

// Sample Output:
// 300


var totalMoney = 1000;
var cost = 700;
returnMoney = totalMoney - cost;
console.log(returnMoney); // 300



// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04



var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;

total = Mathematics+Biology+Chemistry+Physics+Bangla;
average = total/5;
console.log(average.toFixed(2)); // output : 71.04






// Task-3

// You task is to divide the given number by 5 and show the remainder as the output.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

// ---

// Sample Input:
// 119

// Sample Output:
// 4



// remainder = number % 5;

var remainder = 119 % 5;
console.log(remainder); // 4





// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.






// Fundamental concepts of conditonals
// compare variable  == > variable ke anno value er sathe tulona korake satharon vabe bola hoi compare variable.
let age = 20;
console.log(age > 18); // true

// akhane age namer variable ke 18 er sathe compare kora hoyeche. 


// comparison operators: je gulo diye tulona kora hoi ==> >, <, >=, <=, ==, ===, !=,  !==, &&, ||


let t = 5;
let o = 10;
console.log(t < o); // true


// if else

    if (10 > 5) {
        console.log("10 5 ar ceye boro");

    }

    else {
        console.log("10 5 er ceye choto");
    }


// output : 10 5 ar ceye boro


// conditional statement

let boyos = 18;
if (boyos >= 18) {
    console.log("You are adult");
} else {
    console.log("You are minor");
}
// You are adult


// nested if-else
    let year = 20;
    let hasID = true;
    if (age >= 18){
        if(hasID){
            console.log("Allow to enter");

        } else {
            console.log("id nai enter kora jabe na");
        }
    } else {
        console.log("Under age");
    }
// Allow to enter




let marks = 75;
if (marks>60) {
    console.log("a");

} else if (marks>35) {
    console.log("b");
} else {
    console.log("c");
}
// a


var ojon = 40;
if (ojon<20) {
    console.log("abc");
} else {
    console.log("dkjdf");
}

//dkjdf




// logical and &&
let ss = 20;
let ID = true;

if (ss >= 18 && ID) {
    console.log("Thik ache");
} else {
    console.log("thik nai");
}
// Thik ache


// logical or ||
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
    console.log("Thik ache");
} else {
    console.log("thik nai");
}
// Thik ache




// multi level if-else condition
let mark = 53;
if (mark>78) {
    console.log("a");
} else if (mark>43) {
    console.log("b");
} else if (mark>=23) {
    console.log("c");

}else {
    console.log("d");
}
// b


// nested if-else condition
let ag = 20;
let id = true;

if (ag>= 18) {
    if (id) {
        console.log("enter");
    } else {
        console.log("id nai");
    }
} else {
    console.log("under age");
}
// enter



// ternary
// condition ? true : false 

let ae = 20;
let result = ae >= 18 ? "Adult" : "Not Adult";
console.log(result); // Adult


let isLogin = true;
console.log(isLogin ? "Welcome" : "Please Login"); // Welcome


// simple ternary
var e = 20;
e >= 18 ? console.log("vote dio") : console.log("ghumai thako");
// Vote dio




// semi advanced ternary
let m = 20;
let n = false;
let res = age >= 18 
    ? (n ? "Entry Allowed" : "id")
    : "Under age"
console.log(res); // id








// logical not operator
// !true ==> false
// !!true ==> true

let isLog = false;
if (!isLog) {
    console.log("please login");
}


// js-conditional-tasks
// Task 1

// Free Drinks
//     - Burger more than 500tk: free Coke
//     - Else Coke: 30tk


