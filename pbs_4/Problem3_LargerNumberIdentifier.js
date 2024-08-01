largerNumberIdentifier = function(num1, num2){
    if(num1>num2){
        console.log(`${num1} is larger than ${num2}`)
    }else if(num2>num1){
        console.log(`${num2} is larger than ${num1}`)
    }else if(num1===num2){
        console.log("Both numbers are equal")
    }else{
        console.log("Please enter valid input")
    }
}
largerNumberIdentifier(-7,0)