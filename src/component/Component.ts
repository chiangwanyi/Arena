import Util from "../utils/util";

abstract class Component {
    /** 组件ID */
    private _id: string;
    /** 组件所属图层ID，默认为0 */
    private _layerId: number = 0;

    protected constructor() {
        this._id = Util.guid();
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get layerId(): number {
        return this._layerId;
    }

    set layerId(value: number) {
        this._layerId = value;
    }

    abstract build(): SVGElement;
}

export default Component