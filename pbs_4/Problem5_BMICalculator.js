BMICalculator = function(weight,height){
    if(weight>0 && height>0){
        let x = weight/(height*height)
        x = x.toFixed(2)
        console.log(`Your BMI is: ${x}.`)
    }else if(weight===0 && height===0){
        console.log("Invalid input, height cannot be zero.")
    }else{
        console.log("Invalid input, height and weight must be positive numbers.")
    }
}
BMICalculator(58,1.82)