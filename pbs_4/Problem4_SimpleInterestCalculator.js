simpleInterestCalculator = function(p,r,t){
    let z = (p*r*t)/100;
    if(p>0 && r>0 && t>0){
        console.log(`The simple interest is: ${z}`)
    }else{
        console.log("Invalid input, all values must be non-negative.")
    }
}
simpleInterestCalculator(4,7,8)