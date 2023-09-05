const { Cart } = require("../classes/Cart");

class User {
  constructor() {
    this.name;
    this.email;
    this.ID;
    this.cart = new Cart();
  }
  withName(name) {
    this.name = name;
    return this;
  }
  withEmail(email) {
    this.email = email;
    return this;
  }
  withID(ID) {
    this.ID = ID;
    return this;
  }
}

module.exports = { User };