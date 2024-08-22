const calculateFactorial = function(n){
    let factorial = 1
    for(let i=n;i>0;i--){
        factorial *= i
    }console.log(factorial)
}

calculateFactorial(5)