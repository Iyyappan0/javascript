//___________Implicit Type Conversion_________
let a = "100";
let b = 200;

//_______String________________________________
c={
    obj : "Object"
}
console.log(a+b, typeof(a+b));
console.log(
   `${a+null}
    ${a+undefined}
    ${a+[1,2,3]}
    ${a+"iyyappan"}
    ${a+c}
    ${a+true}
    ${a+" "}`
);

//__________Number_________________________

console.log(`
    ${b+true}
    ${b+false}
    ${b+undefined}`);
    console.log(
        b+null,
        b+""
    );



//___________Boolean___________________________

console.log(
    true+null,
    true+undefined,
    true+"iyyappz",
    true+"",
)

console.log(
    10=="10"
);


//_______________________EXPLICIT TYPE CONVERSION ____________________________
/* The explicity type conversion create or make by mannually. it is the highly recomended typeconversion of developers...
*/
//___________________String___________________________________________________

console.log(String(false+1+true));
console.log(String(null+100-true+""));
console.log(String(100-undefined));

//___________________Number____________________________________________________

console.log(Number(true+true));
console.log(Number(null-"10"+true+1));
console.log(Number(false*10+12));

//___________________Boolean____________________________________________________

console.log(Boolean(1));
console.log(Boolean("iyyappan"));
console.log(Boolean(0));
console.log(Boolean(Infinity));


//








