let pyramidPattern = function(N) {
    for (let i = 1; i <= N; i++) {
        let bag = '';
        for (let j = 1; j <= N - i; j++) {
            bag += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            bag += '*';
        }    
        console.log(bag);
    }
}

pyramidPattern(6);
