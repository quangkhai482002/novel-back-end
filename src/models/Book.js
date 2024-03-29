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
    }
  }
  Book.init(
    {
      bookID: DataTypes.INTEGER,
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
