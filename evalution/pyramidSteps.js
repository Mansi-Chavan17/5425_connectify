let pyramidStepsrequired = function (num) {
    let sum = 0
    let count = 0
    for (let i = 1; i<=num ; i++) {
        sum += i * (i + 1) / 2;
        if (sum > num) break;
        count++
    }
    console.log(count)

}

pyramidStepsrequired(100)