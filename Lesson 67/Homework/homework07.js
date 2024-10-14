function User(username, contact) {
    this.username = username;
    this.contact = contact;

    this.getContactInfo = function() {
        console.log(`Email: ${this.contact.email}, Phone: ${this.contact.phone}`);
    };
}
