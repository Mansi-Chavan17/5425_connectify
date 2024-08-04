let hollowSquarePattern = function(N){
    for(let i=1;i<=N;i++){
        let bag = "";
        for(let j=1;j<=N;j++){
            if(i===1 || j===1 || i===N || j===N){
                bag += "*"
            }else{
                bag += " "
            }
        }console.log(bag)
    }
}

hollowSquarePattern(5)