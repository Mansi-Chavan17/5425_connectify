const myJoin = function(array,item){
    let str = ""
    for(let i=0;i<array.length;i++){
        if(i<=array.length-2){
            str += array[i] + item
        }else{
            str += array[i]
        }
    }return str
}

let arr = [1,2,3,4]
myJoin(arr," ")