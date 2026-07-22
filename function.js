
//Function Declaration 
let name = "iyyappan"
var age = 19

function hello(){
    console.log(`hello ${name} your age is ${age}`);
    
}
hello()

//Arrow Function    ---- currently high use in all js tools
let hi = (uName,uAge) => {
    for(let i=1;i<=10;i++){
        console.log(`${uName}  ${uAge}`);
        
    }
}
hi("iyapz",20)

//Function Expression  ------ using in react

let gopal = function(){
    return `hellow world`
}
console.log(gopal());



// Default Parameter ------ in function

 let pMeter = (fName="Enter Your Fname",lName="Enter Your Lname") => console.log ( `${fName} ${lName}`);
 pMeter("iyyappan")

//-------------- in Variable

let uId = 465521256221; 
let uNme = uId || "nofgowfhn7803578024";
console.log(uNme);


// return type function

let rect =(a,b)=>{
    console.log(`Finding the values of the input `);
    
    return(a*b)

} 
let globe = rect(10,20)
console.log(globe);


//Non Return type function 

const nonfunc  = function(){
    console.log(`Non Return Type Function `);
    
}
nonfunc()


//Callback Function

let cBack = (uNamee) => {
    for(let a = 1; a <= 10; a++){
        console.log(uNamee);
    }
}

let nme = (fn) => {
    fn("iyappz");
}

nme(cBack);

//__________Anonomous Function____________

let ananomous = function(){
    console.log("Anonomous Function");
    
}
ananomous()
//)_____________________ ARROW Function________

let a=()=>console.log("Arrowfunction")
a()


// __________Higher order Function_________

// let arithmeticFunc = (a,b)=> {
//     console.log(`
//         a + b = ${a+b}
//         a - b = ${a-b}
//         a * b = ${a*b}
//         a / b = ${a/b}
//         a % b = ${a%b}`);
// }

// let logicalFunc  = (a,b) => {
//     console.log(`
//         a > b = ${a>b}
//         a < b = ${a<b}
//         a != b = ${a!=b}
//         a += b = ${a+=b} `);
    

// }

// arithmeticFunc(10,20,logicalFunc(20,50))



//Call back function

let func1 = (callback,a,b) => {
    console.log(`${a+b}`);
    callback(10,20)
}

let func2 = (num1,num2) => {
    console.log(num1+num2);
    

}
func1(func2,100,50)


//______eg-2__________

let Fname = (cback,Fname) =>{
    console.log(
        `hello ${Fname}`
    );
    cback()
    
}

let sayBye = () => { 
    console.log(
        `bye`
    );
    
}
Fname(sayBye,"iyyappan")