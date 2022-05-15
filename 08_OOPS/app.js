// class Color {
//     constructor(r, g, b) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//     }
//     rgb() {
//         return (`rgb(${this.r},${this.g},${this.b})`);
//     }
//     hex() {
//         return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
//     }
//     rgba(a = 1) {
//         const { r, g, b } = this;
//         return (`rgba(${r},${g},${b},${a})`);
//     }
// }
// obj1 = new Color(0, 0, 225);
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.CaclHSL();
    }
    HSLToRGB() {
        let { h, s, l } = this;
        s /= 100;
        l /= 100;
        const k = n => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = n =>
            l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        this.r = 255 * f(0); this.g = 255 * f(8); this.b = 255 * f(4)
    };
    hex() {
        return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
    innerRGB() {
        const { r, g, b } = this;
        return (`${r},${g},${b}`);
    }
    rgb() {
        return (`rgb(${this.innerRGB()})`);
    }
    rgba(a = 1) {
        return (`rgba(${this.innerRGB()},${a})`);
    }
    opposite(){
        let { h, s, l } = this;
        h=(180+h)%360;
        return `hsl(${h},${s}%,${l}%)`;
    }
    fullSaturation(){
        let { h, s, l } = this;
        s=100;
        return `hsl(${h},${s}%,${l}%)`;
    }
    CaclHSL() {
        let { r, g, b } = this;
        r /= 255;
        g /= 255;
        b /= 255;
        const l = Math.max(r, g, b);
        const s = l - Math.min(r, g, b);
        const h = s
            ? l === r
                ? (g - b) / s
                : l === g
                    ? 2 + (b - r) / s
                    : 4 + (r - g) / s
            : 0;
        this.h = 60 * h < 0 ? 60 * h + 360 : 60 * h;
        this.s = 100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0);
        this.l = (100 * (2 * l - s)) / 2;
    }
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%,${l}%)`;
    }
}
obj1 = new Color(225, 0, 225);
const body = document.querySelector("body");
const x = body.style;