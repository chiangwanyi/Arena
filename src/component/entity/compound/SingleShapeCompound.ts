import Component from "../../Component";
import PlainText from "../simple/text/PlainText";
import Point from "../simple/point/Point";

/**
 * 单主体形状组件
 */
abstract class SingleShapeCompound extends Component {

    /** 主体组件 */
    private _body: Component;
    /** 默认端点数量 */
    private _defaultPointsSize: number = 0;
    /** 默认端点列表 */
    private _defaultPoints: Point[] = []
    /** 描述文本 */
    private _description: PlainText;
    /** 描述文本位置 */
    private _descriptionAnchor: string = "center";

    protected constructor(body: Component, description: PlainText) {
        super();
        this._body = body;
        this._description = description;
    }

    abstract buildDefaultPoints(): void;

    get body(): Component {
        return this._body;
    }

    set body(value: Component) {
        this._body = value;
    }

    get defaultPointsSize(): number {
        return this._defaultPointsSize;
    }

    set defaultPointsSize(value: number) {
        this._defaultPointsSize = value;
    }

    get defaultPoints(): Point[] {
        return this._defaultPoints;
    }

    set defaultPoints(value: Point[]) {
        this._defaultPoints = value;
    }

    get description(): PlainText {
        return this._description;
    }

    set description(value: PlainText) {
        this._description = value;
    }

    get descriptionAnchor(): string {
        return this._descriptionAnchor;
    }

    set descriptionAnchor(value: string) {
        this._descriptionAnchor = value;
    }
}

export default SingleShapeCompound;