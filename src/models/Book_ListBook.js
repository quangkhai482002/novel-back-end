"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book_ListBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book_ListBook.init(
    {
      Book_ListBookID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bookID: DataTypes.INTEGER,
      listID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book_ListBook",
    }
  );
  return Book_ListBook;
};

// run code to create Table: npx sequelize-cli model:generate --name Book_ListBook --attributes email:string,password:string,username:string
