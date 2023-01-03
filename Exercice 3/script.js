
let sum=0;
let isD = " "
//*Create a function call isDivisible() that takes no parameter.
function isDivisible(){

//*In the function, loop through numbers 0 to 500.
for(i=0;i<500;i++) {
    if(i%23==0){

//*Console.log all the numbers divisible by 23.
        isD= isD + " " + i
        
//*At the end, console.log the sum of all numbers that are divisible by 23.
        sum= sum+i
        
    }
    
   
}
 console.log("Outcome :" ,isD)
 console.log(sum)
}isDivisible();