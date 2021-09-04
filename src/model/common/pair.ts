class Pair<M, N> {
    /** 值A */
    a: M
    /** 值B */
    b: N

    constructor(a: M, b: N) {
        this.a = a;
        this.b = b;
    }

    getA(): M {
        return this.a;
    }

    getB(): N {
        return this.b;
    }
}

export default Pair