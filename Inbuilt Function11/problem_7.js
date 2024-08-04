let halfDiamondPattern = function(N){
    for (let i = 0; i <= N; i++) {
        let bag = '';
        for (let a = 0; a < i; a++) {
            bag += '*';
        }
        console.log(bag);
    }
    for (let i = N ; i >= 0; i--) {
        let bag = '';
        for (let a = 0; a < i - 1; a++) {
            bag += '*';
        }
        console.log(bag);
    }
}
halfDiamondPattern(6)