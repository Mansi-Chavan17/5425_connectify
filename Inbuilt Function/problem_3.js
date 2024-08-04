let diamondPattern = function(N){
    if (N%2===0) {
        console.log("The number should be odd")
    }
    else {
        let center = Math.floor(N / 2);
        for (let i = 0; i <= center; i++) {
            let bag = '';
            for (let j = 0; j < center - i; j++) {
                bag += ' ';
            }
            for (let a = 0; a < 2 * i + 1; a++) {
                bag += '*';
            }
            console.log(bag);
        }
        for (let i = center - 1 ; i >= 0; i--) {
            let bag = '';
            for (let j = 0; j < center - i; j++) {
                bag += ' ';
            }
            for (let a = 0; a < 2 * i + 1; a++) {
                bag += '*';
            }
            console.log(bag);
        }
    }
}
diamondPattern(7)