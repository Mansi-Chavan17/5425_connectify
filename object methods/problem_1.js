let obj = {
    studentOne: {sub1:88,sub2:98,sub3:90},
    studentTwo: {sub1:85,sub2:92,sub3:94},
    studentThree: {sub1:75,sub2:82,sub3:78},
    leastTotal : function(){
        // totals
        let oneMarks = this.studentOne.sub1 + this.studentOne.sub2 +this.studentOne.sub3
        let twoMarks = this.studentTwo.sub1 + this.studentTwo.sub2 +this.studentTwo.sub3
        let threeMarks = this.studentThree.sub1 + this.studentThree.sub2 +this.studentThree.sub3

        // Conditions
        if(oneMarks<twoMarks && oneMarks<threeMarks){
            console.log("The least total is of Student One")
        }
        else if(twoMarks<oneMarks && twoMarks<threeMarks){
            console.log("The least total is of Student Two")
        }
        else if(threeMarks<oneMarks && threeMarks<twoMarks){
            console.log("The least total is of Student Three")
        }
    },
    highestTotal: function(){
        // totals
        let oneMarks = this.studentOne.sub1 + this.studentOne.sub2 +this.studentOne.sub3
        let twoMarks = this.studentTwo.sub1 + this.studentTwo.sub2 +this.studentTwo.sub3
        let threeMarks = this.studentThree.sub1 + this.studentThree.sub2 +this.studentThree.sub3

        // Conditions
        if(oneMarks>twoMarks && oneMarks>threeMarks){
            console.log("The highest total is of Student One")
        }
        else if(twoMarks>oneMarks && twoMarks>threeMarks){
            console.log("The highest total is of Student Two")
        }
        else if(threeMarks>oneMarks && threeMarks>twoMarks){
            console.log("The highest total is of Student Three")
        }
    }
}