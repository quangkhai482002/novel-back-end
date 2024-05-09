"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {
        foreignKey: "userID",
      });
      Review.belongsTo(models.Book, {
        foreignKey: "bookID",
      });
    }
  }
  Review.init(
    {
      userID: DataTypes.INTEGER,
      bookID: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      ratting: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};

// run code to create Table: npx sequelize-cli model:generate --name Review --attributes email:string,password:string,username:string
