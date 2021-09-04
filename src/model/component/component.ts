import Util from "../../utils/utils";

class Component {
    /** 组件ID */
    id: string
    /** 组件所属组ID，默认为0 */
    groupId: number = 0
    /** 组件index（组内） */
    index: number = -1

    constructor(id: string | undefined) {
        if (id === undefined) {
            this.id = Util.guid()
        } else {
            this.id = id;
        }
    }

    setGroupId(groupId: number) {
        this.groupId = groupId;
    }

    setIndex(index: number) {
        this.index = index;
    }

    draw(ctx: CanvasRenderingContext2D): void { }
}

export default Component