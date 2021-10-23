module.exports = function(sequelize, DataTypes) {
    // Add code here to create a Post model
    const Burger2 = sequelize.define("Burger2", {
    // This model needs a title, a body, and a category  
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false    
        }

    });
    // Don't forget to 'return' the post after defining
    return Burger2;
};