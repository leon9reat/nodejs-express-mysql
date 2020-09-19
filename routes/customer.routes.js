module.exports = app => {
    const customer = require("../controllers/customer.controller");

    app.get("/customers", customer.findAll); // Retrieve all Customers
    app.post("/customers", customer.create)
}