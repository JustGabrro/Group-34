function Book(title, author = "Unknown") {
    this.title = title;
    this.author = author;

    this.getDetails = function() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    };
}
