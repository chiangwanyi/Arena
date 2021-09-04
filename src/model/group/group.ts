import Component from "../component/component"

class Group {
    /** 组ID */
    id: number
    /** 组件列表 */
    components: Component[]
    /** 当前index */
    currentIndex: number = 0

    constructor(id: number) {
        this.id = id;
        this.components = []
    }

    push(el: Component): void {
        el.index = this.currentIndex++;
        el.groupId = this.id;
        this.components.push(el);
    }
}

export default Group;