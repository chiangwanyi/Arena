import Pair from "../common/Pair";

class Coordinate {
    /** 坐标（横坐标，纵坐标） */
    position: Pair<number, number>

    constructor(x: number, y: number) {
        this.position = new Pair(x, y);
    }

    static build(x: number, y: number): Coordinate {
        return new Coordinate(x, y);
    }

    x(): number {
        return this.position.first();
    }

    y(): number {
        return this.position.second();
    }
}

export default Coordinate;