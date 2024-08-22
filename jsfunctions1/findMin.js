function findMinMax(arr){
    let min = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }console.log(min)
}

let list = [54,83,9,6,8,2]
findMinMax(list)