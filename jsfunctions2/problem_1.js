const distance = function(x1,y1,x2,y2){
    let xSquares = (x2 -x1)**2
    let ySquares = (y2 -y1)**2
    let distance = Math.sqrt(xSquares+ySquares)
    console.log(distance)
}

distance(2,3,5,7)