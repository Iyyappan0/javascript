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

const x = 100;
console.log(`
    ${x+null}
    ${x+undefined,typeof(x+undefined)}
    ${x+"iyyappan",typeof(x+"iyyappan")}`);




