const celsiusToFahrenheit = function(C){
    let F = C * (9/5) + 32;
    console.log(F)
}
const fahrenheitToCelsius  = function(F){
    let C = (F - 32) * 5/9;
    console.log(C)
}

celsiusToFahrenheit(37)
fahrenheitToCelsius(98.6)