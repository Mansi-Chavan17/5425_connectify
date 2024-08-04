let hollowPyramidPattern = function(N) {
    for (let i = 1; i <= N; i++) {
        let bag = '';
        for (let j = 1; j <= N - i; j++) {
            bag += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (i === N || j === 1 || j === 2 * i - 1) {
                bag += '*';
            }else{
                bag += " "
            }
        }    
        console.log(bag);
    }
}

hollowPyramidPattern(5);