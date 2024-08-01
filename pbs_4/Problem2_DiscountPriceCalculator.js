discountPriceCalculator = function(price){
    if(price>20){
        let x = price*(10/100);
        let y = price - x;
        console.log(`The final price of the item is: ${y}`);
    }else{
        console.log("Invalid price, the price must be a non-negative number.");
    }
}
discountPriceCalculator(25)