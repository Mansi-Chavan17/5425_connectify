let hollowTrianglePattern = function(N){
    for (let i = 1; i <= N; i++) {
        let bag = '';
        for (let a = 1; a <= i; a++) {
            if (a===1 || a===i || i===N) {
                bag += '*';
            }else {
                bag += " "
            }
        }
        console.log(bag);
    }
}
hollowTrianglePattern(5)