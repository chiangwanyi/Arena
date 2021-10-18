import Component from "../../../Component";
import Coordinate from "../../../../coordinate/Coordinate";

/**
 * 普通单行文本
 */
class PlainText extends Component {
    /** 文本内容 */
    private _content: string;
    /** 中心坐标 */
    private _pos: Coordinate;
    /** 文本字体大小 */
    private _fontSize: number = 16;
    /** 文本字体类型 */
    private _fontFamily: string = "Consolas,serif";
    /** 文本对齐方式 */
    private _textAnchor: string = "middle";
    /** 文本基线对齐方式 */
    private _dominantBaseline: string = "central";
    /** 文本颜色 */
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