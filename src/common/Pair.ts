class Pair<M, N> {
    /** 值A */
    a: M
    /** 值B */
    b: N

    constructor(a: M, b: N) {
        this.a = a;
        this.b = b;
    }

    first(): M {
        return this.a;
    }

    second(): N {
        return this.b;
    }
}

export default Pair