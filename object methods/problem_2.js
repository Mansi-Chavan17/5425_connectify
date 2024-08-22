let rectangle = {
    length : 20,
    width : 40,
    area : function(){
        console.log(this.length*this.width)
    },
    perimeter : function(){
        console.log(2*(this.length+this.width))
    }
}

rectangle.area()
rectangle.perimeter()