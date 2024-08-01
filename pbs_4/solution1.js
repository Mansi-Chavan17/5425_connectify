triangleArea = function(base,height){
    let x = (base*height)*(1/2)
    if(x!==0 && base>0 && height>0){
        console.log(`The area of Triangle is: ${x}`)
    }else{
        console.log("Invalid number, base and height must be positive number ")
    }
}
triangleArea(10,0.5)