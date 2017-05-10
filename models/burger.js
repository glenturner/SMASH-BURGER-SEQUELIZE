// Import the ORM to create functions that will interact with the database.

module.exports = function (sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len: [1]}
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    });
    return burger;
};