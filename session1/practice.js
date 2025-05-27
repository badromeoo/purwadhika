

//declare 'let' varable
let headCount = 0;
headCount = 100;

//declare 'const' variable
const name = "bintang";



console.log(headCount); 


//==============================
//variable type
//==============================

const carBrand = "Toyota"; //string
const age = 22; //number 2^53 - 1

//==============================
//exercise
//==============================

//1.write a code to find area of rectangle
const length = 5; // define length of rectangle
const width = 3; // define width of rectangle
const area = length * width; // calculate area of rectangle
console.log(`Area of rectangle: ${area}`); // output area of rectangle

console.log("--------------------");

//2.write a code to find perimeter of rectangle

const perimeter = 2 * (length + width); // calculate perimeter of rectangle
console.log (`Perimeter of rectangle: ${perimeter}`); // output perimeter of rectangle

console.log("--------------------");

//3.write a code to find diameter of circle
const radius = 5; // define radius of circle
const diameter = 2 * radius; // calculate diameter of circle
console.log (`diameter of circle: ${diameter}`); // output diameter of circle


console.log("--------------------");

//4.write a code to find circumference of circle
const circumference = 2 * Math.PI * radius; // calculate circumference of circle
console.log(`circumference of circle: ${circumference}`); // output circumference of circle


console.log("--------------------");

//5.write a code to find area of circle
const areaOfCircle = Math.PI * radius **2; // calculate area of circle
console.log(`Area of circle: ${areaOfCircle}`); // output area of circle


console.log("--------------------");

//6.write a code to find angles of triangle if two angles are given 
const angleA = 80; // define angle A
const angleB = 65; // define angle B
const angleC = 180 - (angleA + angleB); // calculate angle C
console.log(`Angle C of triangle: ${angleC}`); // output angle C of triangle

console.log("--------------------");