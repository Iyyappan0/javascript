//___________Implicit Type Conversion_________

const a = "100";
const b = 200;

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

