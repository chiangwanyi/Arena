import Pair from "../common/pair";
import Component from "../component/component";
import Group from "../group/group";

console.log("arena2d v1.0.0");

const DEFAULT_GROUP_ID = 0

class Arena2d {
    /** 绑定容器ID */
    bindId: string
    /** 组列表 */
    groupMap: Map<number, Group>
    /** 画布尺寸（宽度，高度） */
    size: Pair<number, number>
    /** 画布context */
    ctx: CanvasRenderingContext2D | undefined

    constructor(domId: string, width: number, height: number) {
        this.bindId = domId;
        this.groupMap = new Map();
        this.size = new Pair(width, height);
        
        this.init()
    }

    /**
     * 初始场景
     */
    init(): void {
        let defaultGroup = new Group(DEFAULT_GROUP_ID)
        this.groupMap.set(defaultGroup.id, defaultGroup);
    }

    /**
     * 绑定Canvas画布
     */
    bind(): void {
        let canvas = document.createElement("canvas")
        canvas.id = this.bindId
        canvas.width = this.size.getA()
        canvas.height = this.size.getB()

        let container = document.getElementById(this.bindId)
        if (container !== null) {
            document.body.replaceChild(canvas, container)
            let context = canvas.getContext("2d")
            if (context !== null) {
                this.ctx = context
            }
        } else {
            throw Error(`未找到容器:${this.bindId}，绑定画布失败`)
        }
    }

    /**
     * 添加组件
     * @param el 待添加组件
     * @param groupId 所属组ID
     */
    push(el: Component, groupId: number | undefined): void {
        if (el.id === undefined) {
            throw Error(`Component未设置id，添加失败`)
        } else if (!this.checkElementId(el.id)) {
            throw Error(`Component已存在，添加失败`)
        }
        let group;
        if (groupId === undefined) {
            group = this.groupMap.get(DEFAULT_GROUP_ID);
            if (group === undefined) {
                throw Error("场景初始化失败")
            }
        } else {
            group = this.groupMap.get(groupId);
            if (group === undefined) {
                throw Error(`Group:${groupId}不存在`)
            }
        }
        group.push(el)
    }

    /**
     * 检查组件ID是否可用（是否唯一）
     * @param id 组件ID
     * @returns 结果
     */
    checkElementId(id: string): boolean {
        this.groupMap.forEach(group => {
            let result = group.components.find(el => el.id === id);
            if (result === undefined) {
                return true;
            } else {
                return false
            }
        })
        return false;
    }
}

export default Arena2d;