function countArea(...args) {
    if (args.length === 1) {
        let radius = args[0];
        return 3.14 * radius ** 2;
    } else if (args.length === 2) {
        let [length, width] = args;
        return length * width;
    } else if (args.length === 3) {
        let [a, b, c] = args;
        let s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }
}
