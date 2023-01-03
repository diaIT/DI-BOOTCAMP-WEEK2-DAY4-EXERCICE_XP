//*Create a function named calculateTip() that takes no parameter.

function calculateTip(){
//*Inside the function, use prompt to ask John for the amount of the bill.
const bill = Number(prompt("How much is the bill"));
let tipPercentage

//*If the bill is less than $50, tip 20%.
if (bill < 50) tipPercentage = 0.2;

//*If the bill is between $50 and $200, tip 15%.
if (bill > 50 && bill < 200 ) tipPercentage =0.15;

//*If the bill is more than $200, tip 10%.
if (bill>200) tipPercentage= 0.1;

const totabill = bill * (1+tipPercentage);

//µConsole.log the tip amount and the final bill (bill + tip).
console.log("bill:", bill);
console.log("Tip amount : ",totabill );
}
calculateTip()

