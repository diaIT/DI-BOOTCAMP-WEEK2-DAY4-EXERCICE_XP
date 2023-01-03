//*Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//*an item price
//*and an array representing the amount of change in your pocket.
function changeEnough(itemPrice, amountOfChange){
    const sum = calculateSum(amountOfChange)
    if(itemPrice <= sum){
       return true
    }else{
       return false
   }

}


//*calculateSum([25, 20, 5, 0])
 function calculateSum(arr){
    let sum = null
    for(i=0; i<arr.length; i++){ 
        let coinValue
        const numberofCoins = arr[i]
        if(i==0){ coinValue = 0.24}
        if(i==1){ coinValue = 0.10}
        if(i==2){ coinValue = 0.05}
        if(i==3){ coinValue = 0.01}
        console.log("we have", numberofCoins, "coins that a value of", coinValue)
        sum = sum + numberofCoins * coinValue
    }
    console.log("the total sum is ", sum)
    return sum

 }
 changeEnough(14.11, [2,100,0,0])