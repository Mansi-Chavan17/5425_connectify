let numberPattern = function(N) {
    for (let i = 1; i <= N; i++) {
        let bag = '';
        for (let j = 1; j <= N - i; j++) {
            bag += ' ';
        }
        for (let j = 1; j <= i; j++) {
            bag += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            bag += j;
        }
        console.log(bag);
    }
}

numberPattern(4);
