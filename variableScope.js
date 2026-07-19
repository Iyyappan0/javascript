//var ---- Scope

const var1 = () =>{
    if(true){
        var val = "var is a function scope";
        
        
    }
    console.log(val); 
}
var1()

//let & const ------ Scope

const b_scope = function(){
    if(true){
        let val1 = "let is a Block scoped variable"
        const val2 = "const is also a block scopeed variable" 
        
        console.log(`${val1} 
${val2}`);
    }
}
b_scope()