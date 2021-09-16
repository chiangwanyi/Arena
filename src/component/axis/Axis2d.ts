class Axis2d {
    private _axisId: string = "axis";
    private _xAxisInterval: number = 10;
    private _yAxisInterval: number = 10;
    private _color: string = "#d9d9d9";

    get axisId(): string {
        return this._axisId;
    }

    set axisId(value: string) {
        this._axisId = value;
    }

    get xAxisInterval(): number {
        return this._xAxisInterval;
    }

    set xAxisInterval(value: number) {
        this._xAxisInterval = value;
    }

    get yAxisInterval(): number {
        return this._yAxisInterval;
    }

    set yAxisInterval(value: number) {
        this._yAxisInterval = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    build(containerWidth: number, containerHeight: number): SVGElement {
        let xStep = this._xAxisInterval;
        let xD = ``;
        while (xStep < containerWidth) {
            xD += `M${xStep} 0 V ${containerHeight} `;
            xStep += this._xAxisInterval;
        }
        xD += "Z";

        let yStep = this._yAxisInterval;
        let yD = ``;
        while (yStep < containerHeight) {
            yD += `M0 ${yStep} H ${containerWidth} `;
            yStep += this._yAxisInterval;
        }
        yD += "Z";

        let axisGroup = document.createElementNS('http://www.w3.org/2000/svg', "g");
        axisGroup.setAttribute("id", this._axisId);
        axisGroup.setAttribute("style", `fill: transparent; stroke: ${this._color}`);
        let xAxis = document.createElementNS('http://www.w3.org/2000/svg', "path");
        xAxis.setAttribute("d", xD);
        let yAxis = document.createElementNS('http://www.w3.org/2000/svg', "path");
        yAxis.setAttribute("d", yD);

        axisGroup.appendChild(xAxis);
        axisGroup.appendChild(yAxis);

        return axisGroup;
    }
}

export default Axis2d;