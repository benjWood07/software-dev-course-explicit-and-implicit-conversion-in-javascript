
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
let totalAge = Number(age) + 5; // Fix: Convert age to a number before adding so that 5 is not converted to a string (otherwise theoutput would be: Total Age: 255)
console.log("Total Age: " + totalAge);


let thisExample = "";
if (Boolean(thisExample))
  { console.log("You will see this execute."); }
else
  { console.log("No, this will not execute."); }
