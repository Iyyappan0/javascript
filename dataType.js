/* Primitive Data Types */
//________________Number / Integer_____________

let a = 10;
let b = 20.245;
console.log(a+b,a-b,a*b,a/b,a%b,typeof(a,b));

//________________Characters / String__________

let x = "Iyyappan" // String double quotes
let y = '_V' // Single quotes
let z = `_The_king` // Back tick
console.log(x+y+z,typeof(x,y,z));

//_______________Boolean_______________________

let condition = a<b ; 
console.log( condition , typeof(condition) );

//_______________Undefined_____________________

let n;
let m = undefined;
console.log(n,typeof(m));
  
//_______________Null__________________________

let zy = "null"
let ab = 0
console.log(zy,typeof(zy,ab));

// Single line comment

/*  multi
    line  
    comment */

/* Non-Primitive Data Type */

//_______________Array___________________________________

let studentDetails = [
    name = "iyyappan",
    age = 20,
    dept = "BCA",
    year = "3rd"
]
console.log(studentDetails);
console.log(studentDetails.length-1,studentDetails[3],typeof(studentDetails));

//_____________Object___________________________________

let details = {
    studentName   :    "Iyyappan V",
    department    :    "BCA-Computer Application",
    yearOfPassing :    "2027",
    bloodGroup    :    "A+ve",
    mobileNumber  :    9384731564
}
console.log(details,details.mobileNumber,typeof(details));
console.log(Array.isArray(details), details instanceof Object);



