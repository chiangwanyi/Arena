import SingleShapeCompound from "../SingleShapeCompound";
import PlainText from "../../simple/text/PlainText";
import CircleShape from "../../../shape/curved/CircleShape";

/**
 * 圆
 */
class Circle extends SingleShapeCompound {
    /**
     * 端点数量
     */
    pointsSize: number = 4;

    constructor(body: CircleShape, description: PlainText, pointsSize ?: number) {
        super(body, description);
        if (pointsSize !== undefined) {
            this.pointsSize = pointsSize;
        }
        this.defaultPointsSize = this.pointsSize;
    }

    buildDefaultPoints(): void {
    }

    build(): SVGElement {
        return undefined;
    }

}