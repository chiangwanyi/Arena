import Component from "../../Component";
import PlainText from "../simple/text/PlainText";
import Point from "../simple/point/Point";

abstract class SingleShapeCompound extends Component {

    private _main: Component;
    private _controlPoints: Point[] = []
    private _text: PlainText;
    private _textAnchor: string = "center";

    protected constructor() {
        super();
    }
}

export default SingleShapeCompound;