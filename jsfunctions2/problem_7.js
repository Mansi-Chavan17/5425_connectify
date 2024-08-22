const reverseSentence = function(str){
    let arr = str.split(" ")
    let arr2 = []
    for(let i=0;i<arr.length;i++){
        let rev = "";
        for(let j=arr[i].length-1;j>=0;j--){
            rev += arr[i][j]
        }arr2.push(rev)
    }
    let string = arr2.join(" ")
    console.log(string)
}
let str =  "woH era uoy syug"
reverseSentence(str)