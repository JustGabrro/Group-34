function Counter() {
    this.value = 0;

    this.increment = function() {
        this.value += 1;
    };

    this.getValue = function() {
        return this.value;
    };
}
