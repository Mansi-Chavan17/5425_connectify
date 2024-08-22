const alterFromMid = function(str){
    let arr = []
    for(let i=0;i<str.length;i++){
        arr.push(str[i])
    }
    let mid = Math.floor(arr.length/2)
    if(arr.length%2===1){
        let arr1 = []
        let arrmid = [arr[mid]]
        let arr2 = []
        for(let i=mid-1;i>=0;i--){
            arr1.push(arr[i])
        }
        for(let i=arr.length-1;i>=mid+1;i--){
            arr2.push(arr[i])
        }
        let b = arr1.join('') + arrmid.join('') + arr2.join('')
        console.log(b)
    }else if(arr.length%2===0){
        let arr1 = []
        let arr2 = []
        for(let i=mid-1;i>=0;i--){
            arr1.push(arr[i])
        }
        for(let i=arr.length-1;i>=mid;i--){
            arr2.push(arr[i])
        }
        let b = arr1.join('') + arr2.join('')
        console.log(b)
    } 
}
