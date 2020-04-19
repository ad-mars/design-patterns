class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    toString() {
        return `${this.width}*${this.height}`;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }
}

let rc = new Rectangle(2, 3);
console.log(rc.area);

let sq = new Square(5);
console.log(sq.toString());

sq.width = 10;
console.log(sq.toString());
