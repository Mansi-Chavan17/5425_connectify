const brickWall = function(W,H){
    let width = W*2
    let height = H
    for(let i=0;i<height;i++){
        let bag = ""
        if(i%2==1){
            for(let j=0;j<width;j++){
                if(j%2==1){
                    bag += "[]"
                }else{
                    bag += "  "
                }
            }console.log(bag)
        }else{
            for(let j=0;j<width;j++){
                if(j%2==0){
                    bag += "[]"
                }else{
                    bag += "  "
                }
            }console.log(bag)
        }
    }
}
brickWall(5,4)