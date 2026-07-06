//________________Arithmetic operators___________
let a = 10;
let b = 20;
a++;
b--;
console.log("a+b=",a+b,
     "a-b=",a-b,
      "a*b=",a*b,
       "a/b=",a/b,
       "a%b=",a%b,
       "a**b",a**b,
    );

//______________Relational operstor______________

console.log("a<b=",a<b,
    "a>b=",a>b,
    "a<=b=",a<=b,
    "a>=b=",a<=b,
     "a!=b=",a!=b,
    "a=b=",a=b,
    "a==b=",a==b, // this is working in automatic type conversion 
    "a===b=",a===b, // this is not working in auto but it's working in mannual 
);

//______________Assignment operator______________

console.log(
    "a+=b",a+=b,
    "a-=b",a-=b,
    "a*=b",a*=b,
    "a/=b",a/=b,
    "a%=b",a%=b,

);

//_______________Ternory operator_______________ it like if else

let age = 18 ;
let voter = age >=18 ? "major" : "minor";
console.log(voter);

//______________Nested ternary operator___________

let mark = 200;
let rank = 
mark >=100 ? "Grade A" :
mark >=80 ? "Grade B" :
mark >= 60 ? "Grade C":
"fail";
console.log(rank);


//________________Logical operator ___________

let y = 1;
let z = 0;
console.log(
    y&&z, y||z, !y
);







