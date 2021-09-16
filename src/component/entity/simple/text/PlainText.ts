import Component from "../../../Component";
import Coordinate from "../../../../coordinate/Coordinate";

class PlainText extends Component {
    private _content: string;
    private _pos: Coordinate;

    private _fontSize: number = 16;
    private _fontFamily: string = "Consolas,serif";
    private _textAnchor: string = "middle";
    private _dominantBaseline: string = "central";
    private _fontColor: string = "#000000";

    constructor(content: string, cx: number, cy: number, size ?: number) {
        super();
        this._content = content;
        this._pos = new Coordinate(cx, cy);
        if (size !== undefined) {
            this._fontSize = size;
        }
    }

    set content(value: string) {
        this._content = value;
    }

    set pos(value: Coordinate) {
        this._pos = value;
    }

    set fontSize(value: number) {
        this._fontSize = value;
    }

    set fontFamily(value: string) {
        this._fontFamily = value;
    }

    set textAnchor(value: string) {
        this._textAnchor = value;
    }

    set dominantBaseline(value: string) {
        this._dominantBaseline = value;
    }

    build(): SVGElement {
        let element = document.createElementNS('http://www.w3.org/2000/svg', "text");
        element.setAttribute("x", String(this._pos.x()));
        element.setAttribute("y", String(this._pos.y()));
        element.setAttribute("style", `fill: ${this._fontColor}; font-family: ${this._fontFamily}; font-size: ${this._fontSize}px; text-anchor: ${this._textAnchor}; dominant-baseline: ${this._dominantBaseline};`);
        element.innerHTML = this._content;
        return element;
    }
}

export default PlainText;