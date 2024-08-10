function findMinMax(arr){
    let max = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }console.log(max)
}

let list = [54,83,9,6,8,2]
findMinMax(list)