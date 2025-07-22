/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;  //this is already an example of an implicit conversion
console.log("The result is: " + result);

let implicitExample = "5" * 2;  //This is another example of an implicit coversion
console.log(typeof implicitExample);  //Muliplication will implicity convert a string to a number
console.log("The total in this exampe is " + implicitExample); 

let isValid = Boolean(0);  //Edge case ex. where the Boolean value 0 evaluates to falsy 
if (isValid) {
    console.log("This is valid!");  //This will not run
}

let age = "25";
console.log(typeof age);  //prints the current data type of the variable "age"
let numAge = Number(age);  //explicity convert the variable "age" from string to a number
console.log(typeof numAge)  //prints the current data type of the converted variable "age" to "numAge"
let totalAge = numAge + 5;  //uses converted datatype version of "age" in the calculation
console.log("Total Age: " + totalAge);


