
//*Add the stock and prices objects to your js file.
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

//*Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. 
//*It means that you have 1 banana, 1 orange and 1 apple in your cart.
 const shoppingList = ["banana", "orange", "apple"]

 //*Create a function called myBill() that takes no parameters.
function myBill(){

//*The function should return the total price of your shoppingList.
for(i=0; i<shoppingList.length; i++){

//*The item must be in stock. (Hint : check out if .. in)
//*If the item is in stock find out the price in the prices object.
    if (shoppingList[i] in stock && shoppingList[i] in prices && stock[shoppingList[i]]!=0){

        console.log("the price of ",shoppingList[i],"is",prices[shoppingList[i]])
    }else{
         console.log("there is no apple in stock")
    }

}

}myBill()


