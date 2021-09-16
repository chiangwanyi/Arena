import Component from "../component/Component"

class Layer {
    /** 图层ID */
    private _id: number
    /** 组件列表 */
    private _components: Component[]

    constructor(id: number) {
        this._id = id;
        this._components = []
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get components(): Component[] {
        return this._components;
    }

    set components(value: Component[]) {
        this._components = value;
    }

    push(el: Component): void {
        el.layerId = this._id;
        this._components.push(el);
    }
}

export default Layer;