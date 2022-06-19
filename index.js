// Your code here
class Polygon{
    constructor(args){
        this.sides = [...args]
    }
    get countSides() { return this.sides.length }

    get perimeter() { return this.sides.reduce(function(agg, side) { return agg + side }, 0) }
}


class Triangle extends Polygon {
    get isValid() {
        let sidesInOrder = this.sides.sort()
        return ((sidesInOrder[0] + sidesInOrder[1]) >= sidesInOrder[2])

    }
}


class Square extends Polygon {
    get isValid() {
        if (this.sides[0] !== this.sides[1]) { return false }
        if (this.sides[0] !== this.sides[2]) { return false }
        if (this.sides[0] !== this.sides[3]) { return false }
        return true
    }
    get area() {
        return this.sides[0] ** 2
    }
}
let poly = new Triangle([2, 3, 1])


let square = new Square( [ 5, 5, 5, 5 ] )
let square2 = new Square( [ 5, 4, 3, 2 ] )

console.log(Square.area)
console.log(Square2.area)