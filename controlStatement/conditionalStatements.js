//if STATEMENT________________

/*
Syntax:
if(condition){
statement};
 */

let age = 18;
if(age>=18){
    console.log("you elgible for vote")
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

 const uAge  = 20;
 if(uAge>=18){
    console.log("This Person is Eligible For Voting because, our age was",uAge);
    
 }
 else{
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
if (mark>=90){
    console.log(`${"This student's Rank was Grade 1 because, the mark is"}`,mark);
    
}
else if(mark>=80){
    console.log(`${"this student's Rank is Grade 2 mark is"}`,mark);
    
}
else if(mark>=50){
    console.log(`${"This student had an 3rd Grade because his mark is"}`,mark);
    
}
else{
    console.log("The student was FAIL");
    
}

//___SWITCH CASE STATEMENT_________________

let  day  = 44;
switch(day){
    case 1: console.log("Sunday");
    break;
    case 2 : console.log("Monday");
    break;
    case 3 : console.log("Tuesday");
    break;
    case 4 : console.log("Wednessday");
    break;
    case 5 : console.log("Thursday");
    break;
    case 6 : console.log("Friday");
    break;
    case 7 : console.log("Saturday");
    break;
    default : console.log("Invalid");
    
}


//_____________Ternary Operator________________

let uInput = "1234";
let pwd  = "1234";
let op = pwd == uInput ? "Your login was successfully!" : "Password Incorrect!";
console.log(op);


