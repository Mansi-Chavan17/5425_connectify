let invertedPyramidPattern = function(N) {
    for (let i = 1; i <= N; i++) {
        let bag = '';
        for (let a = 1; a < i; a++) {
            bag += ' ';
        }
        for (let j = N; j >= i; j--) {
             bag += j - (i - 1);
        }
        console.log(bag);
    }
}

invertedPyramidPattern(5);
