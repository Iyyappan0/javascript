//if STATEMENT________________

/*
Syntax:
if(condition){
statement};
 */

let age = 18;
if (age >= 18) {
  console.log("you elgible for vote");
}

//if else STATTEMENT____________

/*
 Syntax:
 if(condition){
 statement
 }
 else{
 statement
   } 
 */

const uAge = 20;
if (uAge >= 18) {
  console.log("This Person is Eligible For Voting because, our age was", uAge);
} else {
  console.log("This Person Not Eligible For Vote!!!");
}

//___else if ladder __________________

/*
 Syntax:
 if(condition){
 statement}
 else if(condition){
 statement}
 else{
    statement} */

const mark = 50;
if (mark >= 90) {
  console.log(
    `${"This student's Rank was Grade 1 because, the mark is"}`,
    mark,
  );
} else if (mark >= 80) {
  console.log(`${"this student's Rank is Grade 2 mark is"}`, mark);
} else if (mark >= 50) {
  console.log(`${"This student had an 3rd Grade because his mark is"}`, mark);
} else {
  console.log("The student was FAIL");
}

//___SWITCH CASE STATEMENT_________________

let day = 4;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednessday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid");
}

// Fall through method in Switch Case Statement
let days = "S1nday";
switch (days) {
  case "Monday":
  case "Tuesday":
  case "Wednessday":
  case "Thursday":
  case "Friday":
    console.log("WEEK DAY");

    break;
  case "Saturday":
  case "Sunday":
    console.log("WEEKEND");
    break;
    default: console.log("it is not a day");

    //Nested if ______________________________________

    let age =2;
    let height = 175;
    let weight = 80;
    if(age>=20){
        if(height>=170){
            if(weight<=85){
                console.log("You sre Selected!!!");
                
            }
            else{
                console.log("your weight is over weight");
                
            }
        }
        else{
            console.log("Your height was low");
            
        }
    }
     else{
        console.log("Your age is not compatitable");
         }
}
 
     
