/* hoisting is a proccess of memory reservation */
//______Function hoisting_______________

//var___hoidting
 
hoistfunc()   // it is throw a reffernce  Erorr!!!

var hoistfunc = () => {
    console.log("hoisting function");
    
}

//let___hoisting   type error
func()

let func = () => {
    console.log("hello");
    
}

//const ____ hoisting     throw an type error 

threeDot14()

const threeDot14 = ( ) =>{
    console.log("pi value is constant");
    
}


