let numberTrianglePattern = function(N){
    for(let i=1;i<=N;i++){
        let bag = "";
        for(let j=1;j<=i;j++){
            bag += i + " "
        }console.log(bag);
    }
}

numberTrianglePattern(4)