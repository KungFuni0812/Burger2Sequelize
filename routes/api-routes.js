// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

    //view all the burgers that is in the database
    app.get("/", function(req, res) {
      // findAll returns all entries for a table when used with no options
        db.Burger2.findAll({}).then(function(data) {
            // we must pull the dataValues out of the array of data (the query results) otherwise the values are inside of prototype, which Handlebars >= 4.6 does NOT like
            var handlebarsArray = [];
            for (var i = 0; i < data.length; i++) {
                handlebarsArray.push(data[i].dataValues)
            }
            var burgerObject = {
                burgers: handlebarsArray
            }
            // We have access to the burger2 as an argument inside of the callback function
            res.render("index", burgerObject);
            // res.json(burgerObject);
        });
    });

    //adding a burger in the db
    app.post("/api/burgers", function(req, res) {
      // create takes an argument of an object describing the item we want to insert
      // into our table. In this case we just we pass in an object with a text and
      // complete property
        db.Burger2.create({
            burger_name: req.body.name,
            devoured: req.body.devoured
        }).then(function(data) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(data);
        });
    });

    // PUT route for updating burger2. We can get the updated todo data from req.body
    app.put("/api/burgers/:id", function(req, res) {
      // Update takes in two arguments, an object describing the properties we want to update,
      // and another "where" object describing the burger2 we want to update
        db.Burger2.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(data) {
            res.json(data);
        });
    });
};
