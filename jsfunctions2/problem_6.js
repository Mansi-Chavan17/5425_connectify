const calculateAverage = function(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    console.log(sum/arr.length)
}

let list = [10,15,20,25]
calculateAverage(list)