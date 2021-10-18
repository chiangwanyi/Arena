import Component from "../../Component";
import Coordinate from "../../../coordinate/Coordinate";

/**
 * 圆形
 */
abstract class CircleShape extends Component {
    /** 圆心坐标 */
    private _pos: Coordinate;
    /** 半径 */
    private _radius: number;
    /** 填充颜色 */
    private _fillColor: string = "transparent";
    /** 边框颜色 */
    private _borderColor: string = "#000000";
    /** 边框尺寸 */
    private _borderSize: number = 1;

    constructor(cx: number, cy: number, radius: number) {
        super();
        this._pos = Coordinate.build(cx, cy);
        this._radius = radius;
    }

    get pos(): Coordinate {
        return this._pos;
    }

    set pos(value: Coordinate) {
        this._pos = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get fillColor(): string {
        return this._fillColor;
    }

    set fillColor(value: string) {
        this._fillColor = value;
    }

    get borderColor(): string {
        return this._borderColor;
    }

    set borderColor(value: string) {
        this._borderColor = value;
    }

    get borderSize(): number {
        return this._borderSize;
    }

    set borderSize(value: number) {
        this._borderSize = value;
    }

    build(): SVGElement {
        let element = document.createElementNS('http://www.w3.org/2000/svg', "circle");
        element.setAttribute("cx", String(this.pos.x()));
        element.setAttribute("cy", String(this.pos.y()));
        element.setAttribute("r", String(this._radius));
        element.setAttribute("style", `fill: ${this._fillColor}; stroke: ${this._borderColor}; stroke-width: ${this._borderSize}px`);
        return element;
    }
}

export default CircleShape;