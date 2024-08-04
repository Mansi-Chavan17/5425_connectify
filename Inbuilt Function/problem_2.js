let rightTrianglePattern = function(N){
    for(let i=1;i<=N;i++){
        let bag = "";
        for(let j=1;j<=i;j++){
            bag += j + " "
        }console.log(bag);
    }
}

rightTrianglePattern(4)