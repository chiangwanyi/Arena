import Layer from "../layer/Layer";
import Pair from "../common/Pair";
import Component from "../component/Component";
import Axis2d from "../component/axis/Axis2d";

console.log("arena2d v1.0.0");

const DEFAULT_LAYER_ID = 0

class Arena2d {
    /** 绑定SVG容器ID */
    svgId: string
    /** 图层列表 */
    layerMap: Map<number, Layer>
    /** 画布尺寸（宽度，高度） */
    size: Pair<number, number>
    /** 画布Container元素 */
    svgContainer: HTMLElement | null;
    /** 坐标轴 */
    axis: Axis2d;

    constructor(svgDomId: string, width: number, height: number) {
        this.svgId = svgDomId;
        this.layerMap = new Map();
        this.size = new Pair(width, height);
        this.svgContainer = document.getElementById(this.svgId);
        this.axis = new Axis2d();

        this.init()
    }

    /**
     * 初始化
     */
    init(): void {
        let layer0 = new Layer(DEFAULT_LAYER_ID)
        this.layerMap.set(layer0.id, layer0);
    }

    /**
     * 添加组件
     * @param el 待添加组件
     * @param layerId 所属图层ID
     */
    push(el: Component, layerId?: number): string {
        if (el.id === undefined) {
            throw Error(`Component未设置id，添加失败`)
        }
        let layer: Layer | undefined;
        if (layerId === undefined) {
            layer = this.layerMap.get(DEFAULT_LAYER_ID);
            if (layer === undefined) {
                throw Error("场景初始化失败")
            }
        } else {
            layer = this.layerMap.get(layerId);
            if (layer === undefined) {
                throw Error(`Layer:${layerId}不存在`)
            }
        }
        layer.push(el);
        return el.id;
    }


    show(): void {
        if (this.svgContainer !== null) {
            this.svgContainer.appendChild(this.axis.build(this.size.first(), this.size.second()));
            this.layerMap.forEach(layer => {
                let components = layer.components;
                components.forEach(el => {
                    let svgElement = el.build();
                    if (this.svgContainer !== null) {
                        this.svgContainer.appendChild(svgElement);
                    }
                })
            })
        }
    }
}

export default Arena2d;