function Light() {
    this.state = "off";

    this.toggle = function() {
        this.state = this.state === "off" ? "on" : "off";
    };
}
