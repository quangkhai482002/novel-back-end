"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.hasMany(models.Chapter);
      Book.belongsTo(models.User, {
        foreignKey: "writerID",
      });
      Book.belongsToMany(models.User, {
        through: "UserFollowBook",
        foreignKey: "bookID",
      });
      Book.belongsToMany(models.ListBook, {
        through: "Book_ListBook",
        foreignKey: "bookID",
      });
      Book.belongsToMany(models.User, {
        through: "Review",
        foreignKey: "bookID",
      });
      Book.hasMany(models.Review);
    }
  }
  Book.init(
    {
      bookID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      writerID: DataTypes.INTEGER,
      bookName: DataTypes.STRING,
      author: DataTypes.STRING,
      writer: DataTypes.STRING,
      ratting: DataTypes.STRING,
      poster: DataTypes.STRING,
      view: DataTypes.STRING,
      desciption: DataTypes.TEXT,
      tag: DataTypes.STRING,
      follow: DataTypes.INTEGER,
      vote: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};

// run code to create Table: npx sequelize-cli model:generate --name Book --attributes email:string,password:string,username:string
