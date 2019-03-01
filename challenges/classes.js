// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(cuboid) {
        this.length = cuboid.length;
        this.width = cuboid.width;
        this.height = cuboid.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(cube) {
        super({length: cube.length, width: cube.length, height: cube.length});
    }
    // It is the same formulas, except for the fact that the dimensions may be
    // simplified to a single value. I could rewrite the methods, but don't fix
    // what isn't broke. Also, if I did rewrite the methods, then the only reason
    // to extend CuboidMaker would be to signal that CubeMaker implements its
    // interface, as we wouldn't need a call to super and we wouldn't need to
    // inherit any of it's methods.
}

const cube = new CubeMaker({length: 10});
console.log(cube.volume()); // 1000
console.log(cube.surfaceArea()); // 600

// But, because I don't want to alter the spirit of the challenge, here is what was asked for:
class CubeMakerReimplementation extends CuboidMaker {
    constructor(cube) {
        super({length: cube.size, width: cube.size, height: cube.size});
        this.size = cube.size;
    }
    volume() {
        return this.size * this.size * this.size;
    }
    surfaceArea() {
        return 6 * this.size * this.size;
    }
}

const cube2 = new CubeMakerReimplementation({size: 10});
console.log(cube2.volume()); // 1000
console.log(cube2.surfaceArea()); // 600
