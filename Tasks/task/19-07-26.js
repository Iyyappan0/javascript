for(let i=1;i<=100;i++){
    if(i%3===0){
        console.log("fizz");
        
    }
    else if(i%5===0){
        console.log("buzz");
        
    }
    else if(i%3===0 && i%5===0){
        console.log(`FizzBuzz`);
        
    }
    else{
        console.log(`${i}`);
        
    }
}

//_____________________________________________________

for(let a=1;a<=100;a++){
    if(a>50 && a<90 && a%5 !==0 && a%3===0 && a%2===0 ){
        console.log(a);
        
    }
}

//___________Average____________________


let sub1 = 100;
let sub2 = 100;
let sub3 = 100;
let sub4 = 50;
const avarage = sub1+sub2+sub3+sub4 ;
console.log(`${avarage/4 }`);


//______________Leap year_______________

let year = 2021;
if((year%4===0 && year%100!==0)|| year%400===0){
    console.log("It is a Leap Year");
    
}
else{
    console.log("it is not a leap year");
    
}

