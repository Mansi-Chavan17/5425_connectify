const myInclude = function(array,item){
    let flag = false
    for(let i=0;i<array.length;i++){
        if(array[i]===item){
            flag = true
        }
    }console.log(flag)
}

let list = [23,54,76,2,15,76,21,9]
let str = "I think Ruth's dog is cuter than your dog!";
// myInclude(list,768) 
console.log(str.replace(" ","_"))