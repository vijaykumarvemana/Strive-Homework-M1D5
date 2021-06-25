/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const  areaRectangle = function(l1, l2) {
    console.log(l1 * l2); //...The area of rectangle is: w*h
}
areaRectangle(2.5, 3.14);


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function(interger1, interger2){
    if (interger1 === interger2){
        return 3 * (interger1 * interger2)
    } else{
        return interger1 * interger2
    }
}
let sumOfTwoIntergersSameValue = crazySum(5,5)
let sumOfTwoIntergers = crazySum(5,9)
console.log(sumOfTwoIntergers)
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function(a){
    if(a > 19){
        return 3* (Math.abs(a-19))
    }else{
        return Math.abs(a-19)
    }
}
let absoluteDifference = crazyDiff(6)

console.log(absoluteDifference)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
const boundary = function(n){
    if( (n >= 1 && n <= 100) || ( n==400 )){
        return true
    }
}
let integer = boundary(5)
console.log(integer)

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
const strivify = function(string){
    if (string === null || string === undefined || string.substring(0, 6) === 'Strive'){
       return string;
        }
    return "Strive"+string;
}
console.log(strivify("StriveSchool"));
console.log(strivify("School"));

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
const check3and7 = function(a){
    if( a % 3 ==0 || a % 7 == 0){
        console.log("given positive integer is a multiple of 3 or a multiple of 7")
    }else{
        console.log("Not a multiple of 3 or a multiple of 7")
    }
}

check3and7(21)
check3and7(4)

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function (string) {
    let reverting = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reverting += string[i]
    }
    return reverting;
}
let reverse = reverseString("StriveSchool")
console.log(reverse)

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
const upperFirst = function (string) {
   let splitStr = string.toLowerCase().split(' ')
   for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' ')
}
let capitalizeFirstLetter = upperFirst("strive school is amazing")
console.log(capitalizeFirstLetter)
/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
const cutString = function (string) {
    return string.substring(1, string.length - 1);
}
console.log(cutString("FullStack"))

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/