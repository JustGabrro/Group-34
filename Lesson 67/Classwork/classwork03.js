function Library(name, books) {
    this.name = name;
    this.books = books;

    this.listBooks = function() {
        console.log(this.books);
    };
}

const myLibrary = new Library('City Library', ['1984', 'To Kill a Mockingbird']);
myLibrary.listBooks();